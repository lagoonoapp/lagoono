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


#from server.src.api.auth_api import admin_required

#profile_api = Namespace('profile_api', path ='/api/app/profile')


@dashboard_route('/userprofile')
class retrieve_user_profile(Resource):
    @login_required
    def get(self):
        current_user = db_user_service.get_current_user()
        if current_user:
            return jsonify({
                'result': True,
                'item': {
                    'userpic_url': current_user.userpic_url,
                    'username': current_user.username,
                    'email': current_user.email
                }
                })
        return jsonify({
            'result': False,
            'error': 'Cannot find user.'
        })
    @login_required
    def post(self):
        current_user = db_user_service.get_current_user()
        data = request_payload()
        save_result = db_user_service.update_profile(current_user, data)
        return jsonify({
            'result': save_result
        })

@dashboard_route('/userprofile/uploaduserpic')
class User_pic(Resource):
    @login_required
    def post(self):
        current_user = db_user_service.get_current_user()
        folder_name = 'userpics'
        if request.files is not None and len(request.files) > 0:
            for key in request.files:               
                uploaded_file = request.files.get(key)
                file_path, file_extension = os.path.splitext(uploaded_file.filename)
                uploaded_file.filename = f'{str(current_user.id)}{file_extension}'
                bucket_name = get_config_var('AWS_BUCKET_NAME')
                upload_result = aws_s3_service.upload_file(uploaded_file, bucket_name, folder_name, 'false')

        return jsonify({
            'result': upload_result.get('result') == True,
            'url': f"/pic/{folder_name}/{upload_result.get('file_name')}"
        })

@dashboard_route('/profile')
class retrieve_user_data(Resource):
    @login_required
    def get(self):
        current_user = db_user_service.get_current_user()
        if current_user:
            account_data = {
                'username': current_user.username,
                'isadmin': db_user_service.if_user_object_admin(current_user),
                'account_status': current_user.account.current_status,
                'userpic_url': current_user.userpic_url,
                'email': current_user.email
            }

            cleanup_session(db.session)
            return jsonify({
                'result': True,
                'account_data': account_data
            })
        return jsonify({
            'result': False,
            'error': 'Cannot find user.'
        })

@dashboard_route('/settings')
class retrieve_user_settings(Resource):
    @login_required
    def get(self):
        current_user = db_user_service.get_current_user()
        if current_user:
            settings = current_user.settings
            return jsonify({
                'result': True,
                'item': settings
            })
        return jsonify({
            'result': False,
            'error': 'Cannot find user.'
        })

    @login_required
    def post(self):
        current_user = db_user_service.get_current_user()
        if current_user:
            try:
                data = request_payload()
                settings = {**(current_user.settings or {}), **data}
                current_user.settings = settings
                flag_modified(current_user, 'settings')
                save_result = current_user.save()
            except Exception as ex:
                # to-do: log exception, for not just print it
                print('ERROR while saving profile')
                print(ex)
                return jsonify({
                    'result': False,
                    'error': 'Can not save user.'
                })
            return jsonify({
                'result': save_result
            })
        return jsonify({
            'result': False,
            'error': 'Cannot find user.'
        })


@dashboard_route('/settings/notifications')
class get_user_notification_settings(Resource):
    @login_required
    def get(self):
        current_user = db_user_service.get_current_user()
        if current_user:
            return jsonify({
                'result': True,
                'item': current_user.notifications
            })
    @login_required
    def post(self):
        current_user = db_user_service.get_current_user()
        if current_user:
            notifications = request_payload()
            current_user.notifications = notifications
            flag_modified(current_user, 'notifications')
            save_result = current_user.save()
            return jsonify({
                'result': save_result
            })