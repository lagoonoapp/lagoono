from io import BytesIO
import os
import requests
from flask import render_template, request, abort, make_response, redirect, url_for, send_from_directory, current_app, send_file, jsonify
from flask_restful import Resource, Api
from flask_login import login_required as flask_login_required, current_user
#from server.src.infrastructure.utils.user_auth_wrapper import login_required

from server.src.infrastructure.utils.wrappers import pages_route
from server.src.infrastructure.utils.global_functions import get_config_var, get_app_host_data
from server.src.infrastructure.services import aws_s3_service


'''
def register_api(folder):
    for module in folder.iterdir():
        if module.is_dir():
            module_spec = importlib.util.find_spec('src.{0}.{1}.api'.format(folder.name, module.name))
            if module_spec:
                namespace_module = importlib.import_module('src.{0}.{1}.api'.format(folder.name, module.name))
                if namespace_module:
                    variables = [item for item in dir(namespace_module) if not item.startswith("__")]
                    for var_name in variables:
                        var = getattr(namespace_module, var_name)
                        if isinstance(var, Namespace):
                            dashboard_app.add_namespace(var)
def init():
    shared_modules_folder = Path.joinpath(Path.cwd(), 'src/modules')
    register_api(shared_modules_folder)


init()               
'''

@pages_route('/')
class DefaultRootURL(Resource):
    @flask_login_required
    def get(self):
        return redirect('/dashboard') #return make_response(render_template('dashboard/dashboard.html'))

@pages_route('/healthycheck/4859')
class HealthyCheck(Resource):
    def get(self):
        return 'ok', 200

# Load Browser Favorite Icon
@pages_route('/favicon.ico')
class Favicon(Resource):
    def get(self):
        return make_response(send_from_directory(os.path.join(current_app.static_folder, 'images'),
                          'favicon.png',mimetype='image/vnd.microsoft.icon'))

# Folders where
non_login_folders = ['userpics']

# Screening the original picture's URL
@pages_route('/pic/tickets/project/<project_id>/<path:picture_name>')
class ProjectTicketsPictures(Resource):
    @flask_login_required
    def get(self, project_id, picture_name):
        if not current_user.is_authenticated:
            return current_app.login_manager.unauthorized()
        project = get_project_by_id(project_id, current_user.id) # TODO: change it to support multiple users
        if project is None:
            return make_response({'error': 'Unauthorized'}, 401)
        bucket_name = get_config_var('AWS_BUCKET_NAME')
        picture_folder = f'tickets/project/{project_id}'
        image_data = aws_s3_service.get_file(bucket_name, picture_folder, picture_name)
        if image_data.result and image_data.item is not None:
            byte_stream = BytesIO(image_data.item.get('data'))
            # Rewind the stream to the beginning
            byte_stream.seek(0)
            return send_file(byte_stream, 
                                mimetype=image_data.item.get('type'),
                                as_attachment=False)
            return make_response(image_data.item)
        else:
            return make_response(None)

# Screening the original picture's URL
@pages_route('/pic/<string:picture_folder>/<path:picture_name>')
class PublicPictures(Resource):
    #@flask_login_required
    def get(self, picture_folder, picture_name):
        if picture_folder not in non_login_folders:
            if not current_user.is_authenticated:
                return current_app.login_manager.unauthorized()
        bucket_name = get_config_var('AWS_BUCKET_NAME')
        image_data = aws_s3_service.get_file(bucket_name, picture_folder, picture_name)
        if image_data.result and image_data.item is not None:
            byte_stream = BytesIO(image_data.item.get('data'))
            # Rewind the stream to the beginning
            byte_stream.seek(0)
            return send_file(byte_stream, 
                                mimetype=image_data.item.get('type'),
                                as_attachment=False)
        else:
            return make_response(None)

# Any other dashboard routes
@pages_route('/dashboard')
class IndexDashboardNoParams(Resource):
    @flask_login_required
    def get(self, path = None):
        host_name, http_protocol, ws_protocol = get_app_host_data(request)
        '''host_name = '127.0.0.1:5014'
        ws_protocol = 'ws'
        http_protocol = 'http'
        local_version = get_config_var('ENV') == 'dev'
        if not local_version:
            host_name = 'app.lagoono.com'
            ws_protocol = 'wss'
            http_protocol = 'https'''
        return make_response(render_template('dashboard.html', host_name=host_name, ws_protocol=ws_protocol, http_protocol=http_protocol))

@pages_route('/dashboard/<path:path>')
class IndexDashboard(Resource):
    @flask_login_required
    def get(self, path = None):
        host_name, http_protocol, ws_protocol = get_app_host_data(request)
        '''host_name = '127.0.0.1:5014'
        ws_protocol = 'ws'
        http_protocol = 'http'
        local_version = get_config_var('ENV') == 'dev'
        if not local_version:
            host_name = 'app.lagoono.com'
            ws_protocol = 'wss'
            http_protocol = 'https'''
        return make_response(render_template('dashboard.html', host_name=host_name, ws_protocol=ws_protocol, http_protocol=http_protocol))



'''
@route('/api/app/jwttest', methods=['GET'])
@login_required # Protected with JWT, needs more testing
def get_test():
    return jsonify({'message': 'Protected works', 'result': True})
'''