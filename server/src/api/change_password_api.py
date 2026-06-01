from flask import jsonify, render_template, send_file, Response, current_app, request, make_response, redirect, url_for
from flask_marshmallow import Marshmallow
from marshmallow import fields, validate, ValidationError, EXCLUDE, INCLUDE

from flask_restful import Resource
from server.src.infrastructure.utils.wrappers import dashboard_route
from server.src.infrastructure.utils.global_functions import request_payload

from server.src.infrastructure.utils.user_auth_wrapper import login_required, get_current_user_id
from server.src.infrastructure.utils.extensions import db, db_schema
from server.src.infrastructure.services import db_user_service

#from server.src.api.auth_api import admin_required

#password_api = Namespace('password_api', path ='/api/app/password')

# Full path is '/dashboard/api/password'

@dashboard_route('/password')
class change_password(Resource):
    @login_required
    def post(self):
        current_user_id = get_current_user_id()
        current_user = db_user_service.get_user_by_id(current_user_id)
        if current_user:
            try:
                password = request_payload('password')
                new_password = request_payload('new_password')
                if current_user.verify_hash(password):
                    current_user.set_password(new_password)
                    current_user.save()
                else:
                    return jsonify({
                        'result': False,
                        'error': 'You are not authorized to change the password.'
                    })
            except Exception as ex:
                # to-do: log exception, for not just print it
                print('ERROR while saving new password')
                print(ex)
                return jsonify({
                    'result': False,
                    'error': 'Can not save a new password. Please refresh the page and try again.'
                })
            return jsonify({
                'result': True
            })
        return jsonify({
            'result': False,
            'error': 'Cannot find user.'
        })