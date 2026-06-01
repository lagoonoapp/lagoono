'''
This component is to abstract working with User, Role, Account, AccountHistory entities. 
Implement a concrete implementation of these classes here and in db_models classes. Any other components don't care how 
exactly it's implemented.
'''
import calendar
import pytz
import traceback
import uuid
from sqlalchemy import desc, and_, or_, func, select, cast, Text
from sqlalchemy.orm.attributes import flag_modified
from sqlalchemy.dialects.postgresql import JSONB, Any, ARRAY, array
from datetime import datetime, date, timedelta
import math

from server.src.infrastructure.db_models.user import User
from server.src.infrastructure.db_models.role import Role
from server.src.infrastructure.db_models.account import Account
from server.src.infrastructure.db_models.board_post import BoardPost
from server.src.infrastructure.db_models.board_comment import BoardComment
from server.src.infrastructure.db_models.consts.result_type import Result

from server.src.infrastructure.utils import global_functions
from server.src.infrastructure.services.email.transactional_email_service import send_user_notification

def get_post_list(user, whose, posts_on_page, page_number):
    try:
        posts = []
        total = 0
        query = None
        if whose == 'all':
            if user.is_admin():
                query = BoardPost.status == 'published'
            else:
                query = or_(and_(BoardPost.status == 'published', BoardPost.private != True),
                            and_(BoardPost.status == 'published', BoardPost.user_id == user.id))
        elif whose == 'my':
            query = and_(BoardPost.user_id == user.id, BoardPost.status == 'published')
        elif whose == 'drafts': # Including non-published
            query = and_(BoardPost.user_id == user.id, BoardPost.status != 'published')
        if query is None:
            query = and_(BoardPost.status == 'published', BoardPost.private != True) # Default query is "all published"
        
        posts = BoardPost.query.filter(query)\
                        .order_by(desc(BoardPost.created))\
                        .limit(posts_on_page)\
                        .offset((page_number - 1) * posts_on_page)\
                        .all()
        total = BoardPost.query.filter(query).count()
        return Result(True, list=posts, item=total)
    except Exception as ex:
        global_functions.print_traceback(ex)
        return Result(False, error='Some error occured while getting list of posts.', list=[], item=0)

def get_post(user, post_short_id):
    post = BoardPost.query.filter(and_(BoardPost.short_id == post_short_id)).first()
    if post is None:
        return None
    if post.user_id == user.id:
        return post
    else:
        if user.is_admin():
            return post
        else:
            if post.status == 'published' and not post.private:
                return post
    return None

def update_post_views(post):
    if post.views is None:
        post.views = 0
    post.views += 1
    post.save()

def get_post_for_edit(user, post_short_id:str):
    post = None
    try:
        #post_id_object = uuid.UUID(post_id)
        post = next(filter(lambda post: post.short_id == post_short_id, list(user.boardposts)), None)
        if post is None:
            if user.is_admin():
                post = BoardPost.query.filter(BoardPost.short_id == post_short_id).first()
                return Result(True, item=post)
        if post is None:
            return Result(False, error='No post with this id found.')
        else:
            return Result(True, item=post)
    except Exception as ex:
        global_functions.print_traceback(ex)
        return Result(False, error='Some error occured when we were trying to load the post.')

def user_can_edit_post(user, post):
    post = next(filter(lambda p: p.short_id == post.short_id, list(user.boardposts)), None)
    if post is None:
        if user.is_admin():
            return True
    return (post is not None)

def get_text_cut(text):
    if text is None or text == '':
        return text
    text_extracted = global_functions.extract_text_from_html(text)
    return global_functions.get_substring_cut(text_extracted, 100)

statuses_available_for_user = ['publish', 'unpublish', 'draft'] # User may change them in UI
statuses_available_for_admins = ['remove', 'restore']

def get_available_statuses(user):
    if not user.is_admin():
        return statuses_available_for_user
    else:
        return statuses_available_for_user + statuses_available_for_admins

def save_post(user, post_dict, progress_status_only=False):
    try:
        post = None
        post_dict.pop('user', None)
        dt_now = datetime.utcnow().strftime('%Y-%b-%d %H:%M:%S')
        status = post_dict.get('status')
        if not status in get_available_statuses(user) or status is None:
            status = 'draft'
        if post_dict.get('id') is None:
            post = BoardPost(**post_dict)
            post.id = uuid.uuid4().hex
            post.short_id = global_functions.generate_short_id(8)
            post.user_id = user.id
            post.created = datetime.utcnow()
            post.upvotes = []
            post.downvotes = []
            post.progress_status = 'new'
            post.history = [{'event': 'created', 'dt': dt_now, 'by': 'author'}]
        else:
            # First, check if user can edit this post
            post_id = uuid.UUID(post_dict.get('id'))
            post = next(filter(lambda post: post.id == post_id, list(user.boardposts)), None)
            if post is None:
                if user.is_admin():
                    post = BoardPost.query.filter(BoardPost.id == post_id).first()
            if post is None:
                return Result(False, error='No post with this id found.')
            post.update(post_dict)
            post.history = post.history or []
        if not progress_status_only:
            post.status = status # draft -> publish -> published -> unpublish -> draft
        if post.status == 'publish':
            if len(post.title) >= 6 and len(post.text) >= 20:
                post.status = 'published'
                post.status_change_comment = ''
                post.history.insert(0, {'event': 'published', 'dt': dt_now, 'by': 'author'})
                post.text_preview = get_text_cut(post.text)
                post.slug = global_functions.generate_slug(post.title)
                if not post.published_once:
                    post.published_once = True
            else:
                post.status = 'rejected'
                post.status_change_comment = 'Title or text are too short.'
                post.history.insert(0, {'event': 'rejected', 'dt': dt_now, 'by': 'system', 'comment': post.status_change_comment})
        elif post.status == 'unpublish':
            post.status = 'draft'
            post.history.insert(0, {'event': 'unpublished', 'dt': dt_now, 'by': 'author'})
        post_save = post.save()
        return Result(post_save, item=post)    
    except Exception as ex:
        global_functions.print_traceback(ex)
        return Result(False, error='Some error occured when saving the post.')

def publish_post(user, post_dict):
    # Step 1. Check the content: profanity check TODO: this check

    # Step 2. Save
    post_save_data = save_post(user, post_dict)
    if post_save_data.result and post_save_data.item is not None and post_dict.title and post_dict.text:
        post = post_save_data.item
        post.status = 'published'
        save_result = post.save()
        return Result(save_result, item=post)
    return Result(False, error='Could not save the post for some reason.')

def vote_post(user, data):
    try:
        post_id = data.get('post_id')
        value = data.get('value')
        if post_id is None or value is None:
            return Result(False, error='Please provide post id and vote value.')
        post_object_id = uuid.UUID(post_id)
        post = BoardPost.query.filter(and_(BoardPost.id == post_object_id, BoardPost.status == 'published')).first()
        if post is None:
            return Result(False, error='Post with this id not found, or been removed or unpublished.')
        
        if post.user.id == user.id:
            return Result(False, error='Sorry but you can\'t vote your own post.')
        save_result = False
        user_id_str = str(user.id)
        list_name = 'upvotes' if value == 1 else 'downvotes'
        opposite_list_name = 'downvotes' if value == 1 else 'upvotes'
        action = 'upvote' if value == 1 else 'downvote'
        list_object = getattr(post, list_name)
        opposite_list_object = getattr(post, opposite_list_name)
        if list_object is None:
            list_object = []
        if opposite_list_object is None:
            opposite_list_object = []
        if user_id_str in list_object:
            return Result(False, error=f'You already {action}d this post.')
        list_object.append(user_id_str)
        if user_id_str in opposite_list_object:
            opposite_list_object.remove(user_id_str)
        flag_modified(post, list_name)
        flag_modified(post, opposite_list_name)
        save_result = post.save()
        return Result(save_result, item=(len(list(post.upvotes)) + len(list(post.downvotes))* -1 ))
    except Exception as ex:
        global_functions.print_traceback(ex)
        return Result(False, error='Something went wrong when trying to save your vote.')

def upsert_comment(user, data):
    try:
        post_id = data.get('post_id')
        post_object_id = uuid.UUID(post_id)
        post = BoardPost.query.filter(and_(BoardPost.id == post_object_id, BoardPost.status == 'published')).first()
        if post is None:
            return Result(False, error='Could not find the post with this id, or it could be removed or hidden.')
        parent_comment_id_object = None
        if data.get('parent_comment_id') is not None:
            parent_comment_id_object = uuid.UUID(data.get('parent_comment_id'))
        text = data.get('text')
        if post_id is None or text is None:
            return Result(False, error='Please provide post id and text of comment.')
        comment = None
        dt_now = datetime.utcnow().strftime('%Y-%b-%d %H:%M:%S')
        if data.get('id') is None:
            comment = BoardComment()
            comment.id = uuid.uuid4().hex
            comment.short_id = global_functions.generate_short_id(8) #???
            comment.user_id = user.id
            comment.created = datetime.utcnow()
            comment.upvotes = []
            comment.downvotes = []
            comment.history = [{'event': 'created', 'dt': dt_now, 'by': 'author'}]
            comment.post_id = post_object_id
            if parent_comment_id_object is not None:
                comment.parent_id = parent_comment_id_object
        else:
            # First, check if user can edit this post
            comment_id = uuid.UUID(data.get('id'))
            comment = next(filter(lambda c: c.id == comment_id and c.user_id == user.id, list(post.comments)), None)
            if comment is None:
                if user.is_admin():
                    comment = next(filter(lambda c: c.id == comment_id, list(post.comments)), None)
            if comment is None:
                return Result(False, error='No comment with this id found.')
            comment.history = comment.history or []
            post.history.insert(0, {'event': 'edited', 'dt': dt_now, 'by': 'author'})
        
        comment.text = text
        comment_save = comment.save()
        return Result(comment_save, item=comment)  
    except Exception as ex:
        global_functions.print_traceback(ex)
        return Result(False, error='Could not save the comment for some reason...')

def delete_comment(user, comment_id:str):
    try:
        comment_id_object = uuid.UUID(comment_id)
        if user.is_admin():
            comment = BoardComment.query.filter(BoardComment.id == comment_id_object).first()
        else:
            comment = BoardComment.query.filter(BoardComment.id == comment_id_object, BoardComment.user_id == user.id).first()

        if comment is None:
            return Result(False, error='No comment was found by this id.')
        comment_delete = comment.delete()
        return Result(comment_delete)

    except Exception as ex:
        global_functions.print_traceback(ex)
        return Result(False, error='Could not delete this post for some reason.')

def delete_post(user, post_id:str):
    try:
        post_id_object = uuid.UUID(post_id)
        post = next(filter(lambda p: p.id == post_id_object, list(user.boardposts)), None)
        if post is None:
            if user.is_admin():
                post = BoardPost.query.filter(BoardPost.id == post_id_object).first()
        if post is None:
            return Result(False, error='No post was found by this id.')
        post_delete = post.delete()
        return Result(post_delete)

    except Exception as ex:
        global_functions.print_traceback(ex)
        return Result(False, error='Could not delete this post for some reason.')

def send_board_notification(user, post, comment, event_name):
    '''
    Check the affected user's settings and check the notification if he has subscription to be notified.
    '''
    user_to_be_notified = None
    subject = ''
    text = ''
    comment_link = ''
    if event_name == 'post_comment':
        if user.id == comment.post.user.id:
            return # Do not notify about your own comments
        user_to_be_notified = comment.post.user
        post = comment.post
        comment_link = f'#{comment.short_id}'
        post_link = f'https://app.lagoono.com/dashboard/feedback/post/view/{post.short_id}/{post.slug}{comment_link}'
        subject = 'A new comment on your post on Lagoono feedback board'
        text = f'Please read a new comment that recently was made on your post: {post_link}.'
    elif event_name == 'comment_replies':
        if user.id == comment.parent_comment.user.id:
            return
        user_to_be_notified = comment.parent_comment.user
        post = comment.post
        comment_link = f'#{comment.short_id}'
        post_link = f'https://app.lagoono.com/dashboard/feedback/post/view/{post.short_id}/{post.slug}{comment_link}'
        subject = 'A new reply on your comment on Lagoono feedback board'
        text = f'Please read a new reply that recently was made on your comment for this post: {post_link}.'

    # Check notification settings and send the notification if user is subscribed

    if user_to_be_notified.notifications is not None and user_to_be_notified.notifications.get(event_name):


        send_user_notification(user_to_be_notified.email, user_to_be_notified.username, subject, text)