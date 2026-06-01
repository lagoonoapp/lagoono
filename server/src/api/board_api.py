import asyncio
import json
import io
import requests
import uuid
from sqlalchemy import and_
from datetime import datetime
from flask import jsonify, render_template, send_file, Response, current_app, request, make_response, redirect, url_for, \
                        send_from_directory
from flask_marshmallow import Marshmallow
from marshmallow import fields as marshmallow_fields, validate, ValidationError, EXCLUDE, INCLUDE, post_dump, pre_dump
from sqlalchemy.orm.attributes import flag_modified

from flask_restful import Resource
from bs4 import BeautifulSoup, SoupStrainer

from server.src.infrastructure.db_models.consts.result_type import Result
from server.src.infrastructure.utils.wrappers import dashboard_route
from server.src.infrastructure.utils.global_functions import request_payload, str_to_type, \
                                    generate_short_id, get_field_value, print_traceback, uuid_from_string, extract_text_from_html,\
                                    get_substring_cut

from server.src.infrastructure.utils.user_auth_wrapper import login_required, get_current_user_id
from server.src.infrastructure.utils.extensions import db, db_schema
from server.src.infrastructure.db_models.consts.result_type import Result
from server.src.infrastructure.services import db_user_service, db_board_service
from server.src.infrastructure.services.notification_service import send_notifications
'''
API: 
/api/app/feedbackboard/<scope> GET - get posts by scope (all, my, drafts)
/api/app/feedbackboard/post/view/<post_short_id>/<post_slug> GET - load a post for viewing
/api/app/feedbackboard/post/edit/<post_short_id> GET - load a post for editing
/api/app/feedbackboard/post POST - saves the post
'''

class PostAuthorSchema(db_schema.Schema):
    class Meta:
        fields = ('id', 'username', 'userpic_url')

class CommentSchema(db_schema.Schema):
    class Meta:
        fields = ('id', 'short_id', 'text', 'children_comments', 'created', 'can_edit', 'parent_comment_id', 'user')
    children_comments = marshmallow_fields.List(marshmallow_fields.Nested(lambda: CommentSchema()))
    #created_str = marshmallow_fields.Function(lambda comment: comment.created.strftime('%d %B %Y %H:%M:%S'))
    can_edit = marshmallow_fields.Function(lambda comment, context: comment.user_id == context.get('user_id'))
    parent_comment_id = marshmallow_fields.Function(lambda comment: comment.parent_comment.id if comment.parent_comment is not None else None)
    user = marshmallow_fields.Nested(PostAuthorSchema)

    @pre_dump()
    def sort_comments(self, data, many, **kwargs):
        data.children_comments = sorted(list(data.children_comments), key=lambda comment: comment.created, reverse=True)
        return data

comment_list_shema = CommentSchema(many=True)

class PostListShortSchema(db_schema.Schema):
    class Meta:
        fields = ('id', 'short_id', 'title', 'slug', 'text', 'views', 'rating', 'comment_number', 'text_preview', 'type', 
        'category', 'private', 'progress_status')
    rating = marshmallow_fields.Function(lambda obj: (len(obj.upvotes) if obj.upvotes is not None else 0) + 
                                                        (len(obj.downvotes) if obj.downvotes is not None else 0) * -1)
    comment_number = marshmallow_fields.Function(lambda obj: len(list(obj.comments)))

    #text_cut = marshmallow_fields.Method('get_text_cut') #.Function(lambda obj: obj.text[:100 + obj.text[100:].find(' ')])

        #return obj.text[:100 + obj.text[100:].find(' ')

post_list_short_schema = PostListShortSchema(many=True)

#post_author_schema = PostAuthorSchema()

class PostInstanceSchema(db_schema.SQLAlchemyAutoSchema):
    class Meta:
        fields = ('id', 'short_id', 'title', 'slug', 'text', 'views', 'rating', 'comment_number', 'text_preview', 'type', 'category',
                    'status', 'reason', 'status_change_comment', 'private', 'created', 
                    'user', 'progress_status', 'published_once')#, 'comments')
    rating = marshmallow_fields.Function(lambda obj: (len(obj.upvotes) if obj.upvotes is not None else 0) + 
                                                        (len(obj.downvotes) if obj.downvotes is not None else 0) * -1)
    comment_number = marshmallow_fields.Function(lambda obj: len(list(obj.comments)))
    #created_str = marshmallow_fields.Function(lambda comment: comment.created.strftime('%d %B %Y %H:%M:%S'))
    user = marshmallow_fields.Nested(PostAuthorSchema)

    '''@pre_dump()
    def sort_comments(self, data, many, **kwargs):
        data.comments = sorted(list(data.comments), key=lambda comment: comment.created, reverse=True)
        return data'''

post_instance_schema = PostInstanceSchema()

@dashboard_route('/feedbackboard/<scope>')
class Get_post_list(Resource):
    @login_required
    def get(self, scope):
        current_user = db_user_service.get_current_user()
        if not current_user:
            return jsonify({
                'result': False,
                'error': 'Cannot find user.'
            })
        # whose = get_field_value(request.args, 'whose', 'all')
        posts_on_page = str_to_type(get_field_value(request.args, 'pagesize'), int, 20)
        page_number = str_to_type(get_field_value(request.args, 'page'), int, 1)

        post_list_data = db_board_service.get_post_list(current_user, scope, posts_on_page, page_number)
        return jsonify({
            'result': post_list_data.result,
            'list': post_list_short_schema.dump(post_list_data.list),
            'total': post_list_data.item
        })

@dashboard_route('/feedbackboard/post')
class Save_Delete_post(Resource):
    @login_required
    def post(self):
        current_user = db_user_service.get_current_user()
        if not current_user:
            return jsonify({
                'result': False,
                'error': 'Cannot find user.'
            })
        post_dict = request_payload()
        new_post_notify = post_dict.get('status') == 'publish' and post_dict.get('published_once') != True # New posts only
        post_save_data = db_board_service.save_post(current_user, post_dict)
        post = post_save_data.item
        if post is None:
            return jsonify({
                'result': False,
                'error': 'Could not save the post for some reason.'
            })
        if not post_save_data.result:
            return jsonify({
                'result': False,
                'error': post_save_data.error or 'Could not save the post for some reason.'
            })
        if new_post_notify:
            send_notifications(current_user, 'new_private_post' if post.private else 'new_post', {
                'post_link': f'https://app.lagoono.com/dashboard/feedback/post/view/{post.short_id}/{post.slug}',
                'post_title': post.title
            }, post.private == True)
        return jsonify({
            'result': True,
            'id': post.id,
            'short_id': post.short_id,
            'status': post.status, 
            'private': post.private,
            'published_once': post.published_once,
            'status_change_comment': post.status_change_comment,
            'error': post_save_data.error
        })
    @login_required
    def delete(self):
        current_user = db_user_service.get_current_user()
        if not current_user:
            return jsonify({
                'result': False,
                'error': 'Cannot find user.'
            })
        post_id = request_payload('id')
        post_delete_data = db_board_service.delete_post(current_user, post_id)
        return jsonify({
            'result': post_delete_data.result,
            'error': post_delete_data.error
        })

'''@dashboard_route('/feedbackboard/post/publish')
class Publish_post(Resource):
    @login_required
    def post(self):
        current_user = db_user_service.get_current_user()
        if not current_user:
            return jsonify({
                'result': False,
                'error': 'Cannot find user.'
            })
        post_dict = request_payload()
        post_save_data = db_board_service.save_post(current_user, post_dict)
        return jsonify({
            'result': post_save_data.result,
            'id': post_save_data.item if post_save_data.item is not None else None,
            'error': post_save_data.error
        })'''

@dashboard_route('/feedbackboard/post/comment')
class Upsert_Remove_comment(Resource):
    @login_required
    def post(self):
        current_user = db_user_service.get_current_user()
        if not current_user:
            return jsonify({
                'result': False,
                'error': 'Cannot find user.'
            })
        comment_data = request_payload()
        comment_save_data = db_board_service.upsert_comment(current_user, comment_data)
        if comment_data.get('id') is None:
            # It's a new comment for a post (any new comment is a comment for a post)
            db_board_service.send_board_notification(current_user, None, comment_save_data.item, 'post_comment')
            if comment_save_data.item.parent_comment is not None:
                # It's also a new comment for some comment
                db_board_service.send_board_notification(current_user, None, comment_save_data.item, 'comment_replies')
        return jsonify({
            'result': comment_save_data.result,
            'id': comment_save_data.item.id if comment_save_data.item is not None else None,
            'status': comment_save_data.item.status if comment_save_data.item is not None else None, 
            'status_change_comment': comment_save_data.item.status_change_comment if comment_save_data.item is not None else None,
            'error': comment_save_data.error
        })
    @login_required
    def delete(self):
        current_user = db_user_service.get_current_user()
        comment_id = request_payload('id')
        comment_delete_data = db_board_service.delete_comment(current_user, comment_id)
        return jsonify({
            'result': comment_delete_data.result,
            'error': comment_delete_data.error
        })

@dashboard_route('/feedbackboard/post/progress')
class Update_post_status(Resource):
    @login_required
    def post(self):
        current_user = db_user_service.get_current_user()
        if not current_user or not current_user.is_admin():
            return jsonify({
                'result': False,
                'error': 'Cannot find user or you are not an adming.'
            })
        post_id = request_payload('id')
        status = request_payload('status')
        status_save_data = db_board_service.save_post(current_user, {'id': post_id, 'progress_status': status}, True)
        return jsonify({
            'result': status_save_data.result,
            'error': status_save_data.error
        })

@dashboard_route('/feedbackboard/post/comments/<post_short_id>')
class Get_post_comments(Resource):
    @login_required
    def get(self, post_short_id):
        current_user = db_user_service.get_current_user()
        if not current_user:
            return jsonify({
                'result': False,
                'error': 'Cannot find user.'
            })
        post = db_board_service.get_post(current_user, post_short_id)
        if post is None:
            return jsonify({
                'result': False,
                'list': [],
                'error': 'Cannot load comments for non-existing post. Probably it was deleted or was set to private.'
            })
        post_comments = sorted(filter(lambda c: c.parent_comment is None, list(post.comments)), key=lambda comment: comment.created, reverse=True)
        user_comment_list_schema = CommentSchema(many=True, context={'user_id': current_user.id})
        comments = user_comment_list_schema.dump(list(post_comments))
        
        return jsonify({
            'result': True,
            'list': comments
        })

@dashboard_route('/feedbackboard/post/view/<post_short_id>/<post_slug>')
class View_post(Resource):
    @login_required
    def get(self, post_short_id, post_slug):
        current_user = db_user_service.get_current_user()
        if not current_user:
            return jsonify({
                'result': False,
                'error': 'Cannot find user.'
            })
        if post_short_id == 'new':
            return jsonify({
                'result': False,
                'error': 'Please provide a valid post id'
            })
        post = db_board_service.get_post(current_user, post_short_id)
        if post is None:
            return jsonify({
                'result': False,
                'error': 'A post with this id doesn\'t exist or was removed.'
            })
        db_board_service.update_post_views(post)
        return jsonify({
            'result': True,
            'item': post_instance_schema.dump(post),
            'can_edit': db_board_service.user_can_edit_post(current_user, post)
        })

@dashboard_route('/feedbackboard/post/edit/<post_short_id>')
class Get_post_for_editing(Resource):
    @login_required
    def get(self, post_short_id):
        current_user = db_user_service.get_current_user()
        if not current_user:
            return jsonify({
                'result': False,
                'error': 'Cannot find user.'
            })
        if post_short_id == 'new':
            return jsonify({
                'result': False,
                'error': 'Please provide a valid post id'
            })
        post_data = db_board_service.get_post_for_edit(current_user, post_short_id)
        if not post_data.result or post_data.item is None:
            return jsonify({
                'result': False,
                'error': 'A post with this id doesn\'t exist or was removed.'
            })
        return jsonify({
            'result': True,
            'item': post_instance_schema.dump(post_data.item)
        })

@dashboard_route('/feedbackboard/post/vote')
class Vote_post(Resource):
    @login_required
    def post(self):
        current_user = db_user_service.get_current_user()
        if not current_user:
            return jsonify({
                'result': False,
                'error': 'Cannot find user.'
            })
        data = request_payload()
        post_vote_data = db_board_service.vote_post(current_user, data)
        return jsonify({
            'result': post_vote_data.result,
            'rating': post_vote_data.item if post_vote_data.item is not None else None,
            'error': post_vote_data.error
        })