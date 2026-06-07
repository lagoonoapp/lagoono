import os
from datetime import datetime
from flask import jsonify, render_template, send_file, Response, current_app, request, make_response, redirect, url_for
from flask_marshmallow import Marshmallow
from flask_restful import Resource

from marshmallow import fields as marshmallow_fields
from sqlalchemy.orm.attributes import flag_modified

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

@dashboard_route('/item/list/<item_name>')
class user_data_items_operations(Resource):
    @login_required
    def get(self, item_name):
        current_user = db_user_service.get_current_user()
        item_data = db_user_service.get_user_items(current_user.id, item_name)
        return jsonify({
            'result': item_data.result,
            'items': item_data.list,
            'error': item_data.error
        })
    @login_required
    def post(self, item_name):
        # Create new item
        current_user = db_user_service.get_current_user()
        data = request_payload()
        save_data = db_user_service.save_user_item(current_user.id, item_name, None, data)
        return jsonify({
            'result': save_data.result,
            'item': save_data.item,
            'error': save_data.error
        })
    
@dashboard_route('/item/instance/<item_name>/<item_id>')
class user_data_item_operations(Resource):
    @login_required
    def get(self, item_name, item_id):
        current_user = db_user_service.get_current_user()
        item_data = db_user_service.get_user_item(current_user.id, item_name, item_id)
        return jsonify({
            'result': item_data.result,
            'items': item_data.list,
            'error': item_data.error
        })
    @login_required
    def post(self, item_name, item_id):
        # Update existing item
        current_user = db_user_service.get_current_user()
        data = request_payload()
        save_data = db_user_service.save_user_item(current_user.id, item_name, item_id, data)
        return jsonify({
            'result': save_data.result,
            'item': save_data.item,
            'error': save_data.error
        })