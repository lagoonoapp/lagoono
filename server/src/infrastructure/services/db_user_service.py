'''
This component is to abstract working with User, Role, Account, AccountHistory entities. 
Implement a concrete implementation of these classes here and in db_models classes. Any other components don't care how 
exactly it's implemented.
'''

import time
import traceback
import uuid
from sqlalchemy import desc, asc, and_, or_, func, select, cast, Text, text
from sqlalchemy.exc import OperationalError
from sqlalchemy.orm import aliased
from sqlalchemy.orm.attributes import flag_modified
from sqlalchemy.dialects.postgresql import JSONB, Any, ARRAY, array
from datetime import datetime, date, timedelta, timezone
from dateutil import parser as date_parser
from dateutil import relativedelta
import math

from server.src.infrastructure.db_models.board_post import BoardPost
from server.src.infrastructure.db_models.board_comment import BoardComment

from server.src.infrastructure.db_models.user import User
from server.src.infrastructure.db_models.role import Role
from server.src.infrastructure.db_models.account import Account
from server.src.infrastructure.db_models.log_entry import LogEntry
from server.src.infrastructure.db_models.log_event import LogEvent
from server.src.infrastructure.db_models.item import Item
from server.src.infrastructure.db_models.item_type import ItemType

from server.src.infrastructure.services.logging import log_service, log_entry_type
from server.src.infrastructure.services.logging.log_entry_type import LogEntryType
from server.src.infrastructure.db_models.account_history import AccountHistory
from server.src.infrastructure.db_models.consts.result_type import Result
from server.src.infrastructure.db_models.consts.event_type import EventType
from server.src.infrastructure.utils.global_functions import get_config_var, print_traceback, get_field_value
from server.src.infrastructure.utils.extensions import db

from server.src.infrastructure.utils.user_auth_wrapper import login_required, get_current_user_id


def get_current_user():
    current_user_id = get_current_user_id()
    if current_user_id is not None:
        return get_user_by_id(current_user_id)

'''def cleanup(session):
    global engine_container
    session.close()
    engine_container.dispose()

def init_app(app):
    global engine_container
    with app.app_context():
        if engine_container is None:
            engine_container = db.get_engine()'''

def create_user(username, email, password, social_provider = None, social_id = None):
    '''
    Creates user and save into database. Returns True if user is created, else False.
    '''
    user = User(username = username,
            email = email,
            social_provider = social_provider, 
            social_id = social_id,
            confirmed = False)
    try:
        if social_provider is not None and social_id is not None:
            password = uuid.uuid4().hex  # Set password to a random value, so it will not be empty
        user.set_password(password)
        user.created = datetime.now()
        event_text = '' if social_provider is None else 'User created with social provider ' + social_provider
        user.save()
        user.account.create_history_event(EventType.user.value, 'User created', event_text)
        user.save()
    except Exception as ex:
        # to-do: log error
        print_traceback(ex)
        print('Exception trying to create a new user: ', ex)
        return None
    return user



def get_all_users(page_number = 1):
    users_per_page = get_config_var('USERS_PER_PAGE')
    if isinstance(page_number, str):
        try:
            page_number = int(page_number)
        except Exception as ex:
            page_number = 1
    users = User.query.order_by(desc(User.created))\
                    .limit(users_per_page)\
                    .offset((page_number - 1) * users_per_page)\
                    .all()
    total = User.query.count()
    return {
        'list': users,
        'total': total,
        'users_per_page': users_per_page
    }

def delete_user(user):
    try:
        db.session.delete(user)
        db.session.commit()
    except Exception as ex:
        print(ex)
        return Result(False, error='Something went wrong while deleting this user...')
    return Result(True)


def toggle_enabled(user_id):
    user = User.query.filter_by(id = user_id).first()
    if user is None:
        return Result(False, error='User not found.')
    user.enabled = not user.enabled
    user.save()
    return Result(True)

def get_user_by_id(id):
    return User.query.filter_by(id = id).first()

def if_user_admin(id):
    user = User.query.filter_by(id = id).first()
    if user is not None:
        return if_user_object_admin(user)
    return False

def if_user_object_admin(user_object):
    return user_object.role.name == 'Admin' #TODO: Role name should not be hardcoded
    
def find_user_by_email(email):
    '''
    Find a user by email.
    '''
    user = User.query.filter_by(email = email).first()
    return user

def get_user_by_id(userid):
    '''
    Get a user by id.
    userid: UUID or string.
    '''
    if isinstance(userid, str):
        userid = uuid.UUID(userid).hex
    user = None
    retries = 1 
    delay = 0.1
    for attempt in range(retries + 1):
        try:
            user = User.query.filter_by(id = userid).first()
            return user  # still attached to session!
        except OperationalError as e:
            db.session.rollback()
            if attempt < retries:
                time.sleep(delay)
            else:
                raise

def save_user(user):
    try:
        user.save()
    except Exception as ex:
        print('Exception trying to save a user: ', ex)
        return False
    return True

def update_account_field(user, account_field_name, account_field_value, if_to_save: bool):
    '''
    Updates user account's field:

    user - user object

    account_field_name - account field name 
    
    account_field_value - account field value

    if_to_save - user will be saved if True
    '''
    setattr(user.account, account_field_name, account_field_value)
    if if_to_save:
        user.save()


def update_profile(user, profile_dict):
    user.update(profile_dict)
    save_user = user.save()
    return save_user

def update_password(old_password, new_password):
    pass

def get_account_history(account_id):
    return AccountHistory.query.filter_by(account_id = account_id).order_by(desc(AccountHistory.date)).all()

import json
def is_jsonable(x):
    try:
        json.dumps(x)
        return True
    except:
        return False

def create_user_log_entry(user_id, project_id, log_entry_dict):
    '''
    Create a log entry that will be available for the end users in their dashboard.
    '''
    save_result = False
    try:
        log_entry = LogEntry(**log_entry_dict)
        log_entry.id = uuid.uuid4().hex
        log_entry.user_id = user_id
        log_entry.project_id = project_id
        log_entry.created = datetime.utcnow()
        log_entry.user_ui = True
        save_result = log_entry.save()
    except Exception as ex:
        print_traceback(ex)
        return Result(False, error='Could not created a log entry.')
    return Result(save_result)

def create_log_entry(log_event_code, type:LogEntryType, title, project_id, user_id, local_vars=None, data=None):
    try:
        # First, try to find a log event by the code
        log_event = LogEvent.query.filter(LogEvent.event_code == log_event_code).first()
        if log_event is None:
            log_event = LogEvent()
            log_event.id = uuid.uuid4().hex
            log_event.enabled = True
            log_event.event_code = log_event_code
            log_event.save()
        if not log_event.enabled:
            return
        project_id_object = None
        user_id_object = None
        if project_id is not None:
            if isinstance(project_id, str):
                project_id_object = uuid.UUID(project_id)
            elif isinstance(project_id, uuid.UUID):
                project_id_object = project_id
        if user_id is not None:
            if isinstance(user_id, str):
                user_id_object = uuid.UUID(user_id)
            elif isinstance(user_id, uuid.UUID):
                user_id_object = user_id
        new_log_entry = LogEntry()
        new_log_entry.event_code = log_event_code
        new_log_entry.type = type.value
        new_log_entry.title = title
        new_log_entry.id = uuid.uuid4().hex
        new_log_entry.project_id = project_id_object
        new_log_entry.user_id = user_id_object
        #new_log_entry.project_id = data.get('project_id')
        #new_log_entry.user_id = data.get('user_id')
        new_log_entry.created = datetime.utcnow()
        # Local vars
        log_data_dict = {}
        if log_event.local_vars is not None and len(log_event.local_vars) and local_vars is not None:
            for log_data in log_event.local_vars:
                var_value = get_field_value(local_vars, log_data)
                if isinstance(var_value, Exception):
                    var_value = traceback.format_exception(type(var_value), var_value, var_value.__traceback__)
                jsonable = is_jsonable(var_value)
                if jsonable:
                    log_data_dict[log_data] = var_value
                else:
                    if hasattr(var_value, '__dict__'):
                        if is_jsonable(var_value.__dict__):
                            log_data_dict[log_data] = var_value.__dict__
                        else:
                            log_data_dict[log_data] = str(var_value)
                    else:
                        log_data_dict[log_data] = str(var_value)
                    
        if data is not None:
            for key, value in data.items():
                jsonable = is_jsonable(value)
                log_data_dict[key] = value if jsonable else str(value)
        new_log_entry.data = log_data_dict
        new_log_entry.save()
        return True
    except Exception as ex:
        print_traceback(ex)
        return False

################### User items ######################################################

item_map = {
    'item': {'item_class': Item, 'name': 'Item'},
    'item_type': {'item_class': ItemType, 'name': 'Item type'}
}

############## TODO
'''
1. add pagination, filtering, sorting to get_user_items
2. add roles and permissions to check if the user can access or modify this item
'''
########################

def get_user_items(user_id, item_name):
    # TODO: add pagination, filtering, sorting
    item_object = item_map.get(item_name)
    if item_object is None:
        return Result(False, error=f'Invalid item name "{item_name}".')
    ItemClassName = item_object['item_class']
    query_data =  ItemClassName.query.filter_by(user_id = user_id).order_by(desc(ItemClassName.created)).all()
    return Result(True, list=query_data)

def get_user_item(user_id, item_name, item_id):
    item_object = item_map.get(item_name)
    if item_object is None:
        return Result(False, error=f'Invalid item name "{item_name}".')
    ItemClassName = item_object['item_class']
    try:
        item_object = ItemClassName.query.filter_by(id=item_id, user_id=user_id).first()
        if item_object is None:
            return Result(False, error='Item not found.')
        item_object.before_fetch()
        return Result(True, item=item_object)
    except Exception as ex:
        print_traceback(ex)
        return Result(False, error='Could not retrieve the item.')

fields_prohibited_to_update = ['id', 'user_id', 'created']

def save_user_item(user_id, item_name, item_data):
    if isinstance(user_id, str):
        user_id = uuid.UUID(user_id).hex
    item_id = get_field_value(item_data, 'id', None)
    if item_id is not None and isinstance(item_id, str):
        item_id = uuid.UUID(item_id).hex
    item_object = item_map.get(item_name)
    if item_object is None:
        return Result(False, error=f'Invalid item name "{item_name}".')
    ItemClassName = item_object['item_class']
    try:
        if item_id is not None:
            # Update an existing item
            item_object = ItemClassName.query.filter_by(id=item_id, user_id=user_id).first()
            if item_object is None:
                return Result(False, error=f'{item_object['name']} not found.')
            item_object.before_update(item_data)
            for key, value in item_data.items():
                if key not in fields_prohibited_to_update:
                    setattr(item_object, key, value)
                    
                    # Check if the field is JSONB and needs to be flagged as modified                
                    if isinstance(getattr(ItemClassName, key).type, JSONB):
                        flag_modified(item_object, key)

            item_object.updated = datetime.now(timezone.utc) # Always update
        else:
            item_object = ItemClassName(**item_data)
            item_object.created = datetime.now(timezone.utc)
            item_object.user_id = user_id # It's always who created it, doesn't automatically mean access or visibility.
        item_object.before_save()
        saved = item_object.save()
        return Result(saved, item=item_object)
    except Exception as ex:
        print_traceback(ex)
        return Result(False, error=f'Could not save the {item_object['name']}.')

def delete_user_item(user_id, item_name, item_id):
    # TODO: add roles and permissions to check if the user can delete this item
    if isinstance(user_id, str):
        user_id = uuid.UUID(user_id).hex
    if isinstance(item_id, str):
        item_id = uuid.UUID(item_id).hex
    item_object = item_map.get(item_name)
    if item_object is None:
        return Result(False, error=f'Invalid item name "{item_name}".')
    ItemClassName = item_object['item_class']
    try:
        item_instance = ItemClassName.query.filter_by(id=item_id, user_id=user_id).first()
        if item_instance is None:
            return Result(False, error='Item not found.')
        delete_result = item_instance.delete()
        return Result(delete_result)
    except Exception as ex:
        print_traceback(ex)
        db.session.rollback()
        return Result(False, error=f'Could not delete the {item_object['name']}.')

###################### End of user items ############################################