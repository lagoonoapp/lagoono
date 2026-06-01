from flask import jsonify, render_template, send_file, Response, current_app, request, make_response, redirect, url_for
from flask_marshmallow import Marshmallow
from marshmallow import fields as marshmallow_fields, validate, ValidationError, EXCLUDE, INCLUDE
from marshmallow_sqlalchemy.fields import Nested

from flask_restful import Resource
from server.src.infrastructure.utils.wrappers import admin_route
from server.src.infrastructure.utils.global_functions import request_payload

from server.src.infrastructure.utils.user_auth_wrapper import login_required, get_current_user_id
from server.src.infrastructure.utils.extensions import db, db_schema
from server.src.infrastructure.services import db_user_service
#from server.src.api.auth_api import admin_required
from server.src.infrastructure.utils.user_auth_wrapper import admin_required

#admin_users_api = Namespace('user_api', path ='/api/app/user')

# Schemas
class AccountSchema(db_schema.Schema):
    class Meta:
        # Fields to expose
        fields =('current_status',)

class UsersSchema(db_schema.Schema):
    account = marshmallow_fields.Nested(AccountSchema, data_key='info')
    class Meta:
        # Fields to expose
        fields = ('id', 'username', 'email', 'confirmed', 'created', 'enabled', 'account')
    

class UserHistorySchema(db_schema.Schema):
    class Meta:
        fields = ('date', 'event', 'comment')

class UserInfoSchema(db_schema.Schema):
    class Meta:
        # Fields to expose
        fields = ('id', 'username', 'email', 'confirmed', 'created', 'enabled')

users_schema_instance = UsersSchema(many = True)
user_schema_instance = UserInfoSchema()
user_history_instance = UserHistorySchema(many = True)

@admin_route('/user/page/<page_number>')
class retrieve_users(Resource):
    @admin_required
    def get(self, page_number):
        users_data = db_user_service.get_all_users(page_number)
        return jsonify({
            'result': True,
            'list': users_schema_instance.dump(users_data.get('list')),
            'total': users_data.get('total'),
            'users_per_page': users_data.get('users_per_page')
        })

@admin_route('/user/<user_id>')
class retrieve_user_info(Resource):
    @admin_required
    def get(self, user_id):
        user = db_user_service.get_user_by_id(user_id)
        if user is None:
            jsonify({
                'result': False,
                'error': 'User not found'
            })
        # Add status and history
        user_info = {
            'user': user_schema_instance.dump(user),
            'history': user_history_instance.dump(db_user_service.get_account_history(user.account.id))
        }

        return jsonify({
            'result': True,
            'user_info': user_info
        })
    @admin_required
    def delete(self, user_id):
        user = db_user_service.get_user_by_id(user_id)
        if user is None:
            jsonify({
                'result': False,
                'error': 'User not found'
            })
        delete_result = db_user_service.delete_user(user)
        return jsonify({
            'result': delete_result.result,
            'error': delete_result.error
        })

@admin_route('/user/enabled')
class enable_disable_user(Resource):
    @admin_required
    def post(self):
        enabled_done = db_user_service.toggle_enabled(request_payload('id'))
        if enabled_done.result:
            return jsonify({
                'result': True
            })
        else:
            print('Error toggling user enabled: ', enabled_done.error)
            return jsonify({
                'result': False
            })