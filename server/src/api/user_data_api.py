import os
from datetime import datetime
from flask import jsonify, render_template, send_file, Response, current_app, request, make_response, redirect, url_for
from flask_marshmallow import Marshmallow
from flask_restful import Resource

from marshmallow import EXCLUDE, fields as marshmallow_fields
from sqlalchemy.orm.attributes import flag_modified

from server.src.infrastructure.db_models.consts.result_type import Result
from server.src.infrastructure.db_models.item_type import ItemType
from server.src.infrastructure.utils.wrappers import dashboard_route
from server.src.infrastructure.utils.global_functions import request_payload, get_field_value, get_config_var, cleanup_session

from server.src.infrastructure.utils.user_auth_wrapper import login_required, get_current_user_id
from server.src.infrastructure.utils.extensions import db, db_schema
from server.src.infrastructure.services import db_user_service
from server.src.infrastructure.utils import security_service

from server.src.infrastructure.services import aws_s3_service

'''
All user data API endpoints.
'''

item_map = {
    'item_type': {
        'list_fields': ('id', 'singular_name'),
        'short_fields':('id', 'plural_name', 'description', 'fields'),
        'model': ItemType
    }
}

_schema_class_cache = {}

def _get_schema_class(entity_name: str, many: bool = False, short_version: bool = False):
    if entity_name not in item_map:
        return Result(False, error='Invalid entity name for schema generation.')

    entity_cache_key = f'{entity_name}_many' if many else (f'{entity_name}_short' if short_version else f'{entity_name}_single')
    if entity_cache_key in _schema_class_cache:
        return Result(True, item=_schema_class_cache[entity_cache_key])

    fields = None
    if many:
        # For list of items, we can directly use the fields defined in item_map
        fields = item_map[entity_name]['list_fields']
    else:
        # For single item, we extract list of fields from the class and create a schema on the fly
        if short_version:
            fields = item_map[entity_name]['short_fields']
        else:
            item_model = item_map[entity_name].get('model')
            if not item_model:
                return Result(False, error='Invalid entity name for schema generation.')
            fields = tuple(column.name for column in item_model.__table__.columns)
    meta_class = type('Meta', (), {'fields': fields, 'unknown': EXCLUDE})
    schema_class_name = f'{entity_name.capitalize()}Schema'
    schema_class = type(schema_class_name, (db_schema.Schema,), {'Meta': meta_class})
    _schema_class_cache[entity_cache_key] = schema_class
    return Result(True, item=schema_class)

def get_schema_object(entity_name: str, many: bool = False, short_version: bool = False):
    schema_class_data = _get_schema_class(entity_name, many, short_version)
    if not schema_class_data.result:
        return None
    return schema_class_data.item(many=many)

@dashboard_route('/item/list/<item_name>')
class user_data_items_operations(Resource):
    @login_required
    def get(self, item_name):
        current_user = db_user_service.get_current_user()
        item_data = db_user_service.get_user_items(current_user.id, item_name)
        item_list = []
        if item_data.result and item_data.list:
            list_data = get_schema_object(item_name, many=True)
            if list_data:
                item_list = list_data.dump(item_data.list)
        return jsonify({
            'result': item_data.result,
            'items': item_list,
            'error': item_data.error
        })
    @login_required
    def post(self, item_name):
        # Create new item
        current_user = db_user_service.get_current_user()
        data = request_payload()
        save_data = db_user_service.save_user_item(current_user.id, item_name, data)
        item = None
        if save_data.result and save_data.item:
            # If item is saved successfully, we return the full item data using the schema
            instance = get_schema_object(item_name, short_version=True)
            if instance:
                item = instance.dump(save_data.item)
        return jsonify({
            'result': save_data.result,
            'item': item,
            'error': save_data.error
        })
    
@dashboard_route('/item/instance/<item_name>/<item_id>')
class user_data_item_operations(Resource):
    @login_required
    def get(self, item_name, item_id):
        current_user = db_user_service.get_current_user()
        item_data = db_user_service.get_user_item(current_user.id, item_name, item_id)
        item = None
        if item_data.result and item_data.item:
            instance = get_schema_object(item_name)
            if instance:
                item = instance.dump(item_data.item)
        return jsonify({
            'result': item_data.result,
            'item': item,
            'error': item_data.error
        })