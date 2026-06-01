from flask import jsonify, render_template, send_file, Response, current_app, request, make_response, redirect, url_for
from flask_marshmallow import Marshmallow
from marshmallow import fields, validate, ValidationError, EXCLUDE, INCLUDE

from flask_restful import Resource
from server.src.infrastructure.utils.wrappers import dashboard_route
from server.src.infrastructure.utils.global_functions import request_payload

from server.src.infrastructure.utils.user_auth_wrapper import login_required, get_current_user_id
from server.src.infrastructure.utils.extensions import db, db_schema
from server.src.infrastructure.services import db_user_service
from server.src.infrastructure.services import aws_s3_service
from server.src.infrastructure.utils.global_functions import get_config_var


# Full path /dashboard/api/upload

@dashboard_route('/upload/<generate_flag>/<path:folder_name>')
class upload_file(Resource):
    @login_required
    def post(self, generate_flag, folder_name):
        #print('Upload to AWS started')
        current_user_id = get_current_user_id()
        current_user = db_user_service.get_user_by_id(current_user_id)
        uploaded_urls = []

        if current_user:
            for key in request.files:               
                uploaded_file = request.files.get(key)
                bucket_name = get_config_var('AWS_BUCKET_NAME')
                upload_result = aws_s3_service.upload_file(uploaded_file, bucket_name, folder_name, generate_flag)
                if upload_result.get('result') == True:
                    # Use this code to screen the actual address
                    #public_file_url = '/pic/{0}/{1}'.format(folder_name, upload_result.get('file_name')) 
                    file_url = f"{request.host_url}pic/{folder_name}/{upload_result.get('file_name')}"
                    uploaded_urls.append(file_url)#upload_result.get('file_url'))  
                else:
                    return jsonify({
                        'result': False,
                        'error': upload_result.get('error') or 'Could not upload files...'
                    })
            #print('Upload to AWS finished')
            return jsonify({
                'result': True,
                'location': uploaded_urls[0],
                'file_urls': uploaded_urls
                #'file_name': upload_result.get('file_name')
            })
        return jsonify({
            'result': False,
            'error': 'Cannot find user.'
        })

@dashboard_route('/upload/<folder_name>')
class delete_file(Resource):
    @login_required
    def delete(self, folder_name):
        current_user_id = get_current_user_id()
        current_user = db_user_service.get_user_by_id(current_user_id)
        bucket_name = get_config_var('AWS_BUCKET_NAME')
        if current_user:
            # Add additional checking preventing abuse deletion
            url_to_delete = request_payload('url')
            if isinstance(url_to_delete, str):
                can_be_deleted = db_user_service.verify_file_to_delete(current_user, folder_name, url_to_delete)
                if not can_be_deleted:
                    return jsonify({
                        'result': False,
                        'error': 'Not authorized access.'
                    })
                delete_result = aws_s3_service.delete_file(bucket_name, folder_name, url_to_delete)
            elif isinstance(url_to_delete, list):
                delete_result = True
                for url in url_to_delete:
                    can_be_deleted = db_user_service.verify_file_to_delete(current_user, folder_name, url)
                    if not can_be_deleted:
                        delete_result = {'result':(delete_result and False)}
                    else:
                        delete_result = aws_s3_service.delete_file(bucket_name, folder_name, url)
            return jsonify({
                'result': delete_result.get('result'),
                'error': delete_result.get('error')
            })

        return jsonify({
            'result': False,
            'error': 'Cannot find user.'
        })

'''
from flask import jsonify, render_template, send_file, Response, current_app, request, make_response, redirect, url_for
from flask_marshmallow import Marshmallow
from marshmallow import fields, validate, ValidationError, EXCLUDE, INCLUDE

from flask_restful import Resource
from server.src.infrastructure.utils.dashboard_app_route_wrapper import route
from server.src.infrastructure.utils.global_functions import request_payload

from server.src.infrastructure.utils.user_auth_wrapper import login_required, get_current_user_id
from server.src.infrastructure.utils.extensions import db, db_schema
from server.src.infrastructure.services import db_user_service
from server.src.modules.fileUploader import aws_s3_service
from server.src.infrastructure.utils.global_functions import get_config_var

#uploader_api = Namespace('upload_api', path ='/dashboard/api/upload')

# Full path /dashboard/api/upload

@route('/upload/<folder_name>/<generate_flag>')
class upload_file(Resource):
    @login_required
    def post(self, folder_name, generate_flag):
        current_user_id = get_current_user_id()
        current_user = db_user_service.get_user_by_id(current_user_id)
        uploaded_urls = []

        if current_user:
            for key in request.files:               
                uploaded_file = request.files.get(key)
                bucket_name = get_config_var('AWS_BUCKET_NAME')
                upload_result = aws_s3_service.upload_file(uploaded_file, bucket_name, folder_name, generate_flag)
                if upload_result.get('result') == True:
                    # Use this code to screen the actual address
                    #    public_file_url = '/pic/{0}/{1}'.format(folder_name, upload_result.get('file_name')) 
                    uploaded_urls.append(upload_result.get('file_url'))  
                else:
                    return jsonify({
                        'result': False,
                        'error': 'Could not upload files...'
                    })
            return jsonify({
                'result': True,
                'file_urls': uploaded_urls
                #'file_name': upload_result.get('file_name')
            })
        return jsonify({
            'result': False,
            'error': 'Cannot find user.'
        })

@route('/upload/<folder_name>')
class delete_file(Resource):
    @login_required
    def delete(self, folder_name):
        current_user_id = get_current_user_id()
        current_user = db_user_service.get_user_by_id(current_user_id)
        bucket_name = get_config_var('AWS_BUCKET_NAME')
        if current_user:
            # Add additional checking preventing abuse deletion
            delete_result = aws_s3_service.delete_file(bucket_name, folder_name, request_payload('url'))
            return jsonify({
                'result': delete_result.get('result'),
                'error': delete_result.get('error')
            })

        return jsonify({
            'result': False,
            'error': 'Cannot find user.'
        })
'''