import inspect
import sys, os, importlib
from pathlib import Path
import pkgutil

from flask import Flask, got_request_exception, request, Blueprint
from flask_cors import CORS
from flask_talisman import Talisman
from server.config import ConfigHelper, ProductionConfig
from multiprocessing import Array, Manager, Value

from server.src.infrastructure.utils.extensions import db, db_schema, mail, alembic, login_manager
from server.src.infrastructure.utils.global_functions import get_config_var
from server.src.infrastructure.utils.error_handlers import custom_api_error_handler


redist_host = None
redis_connection = ''

def create_app():
    global redist_host
    global redis_connection
    app = Flask(__name__, template_folder='../templates') 
    got_request_exception.connect(custom_api_error_handler, app)
    #script_origins = ['https://lagoono.com']        
    #if get_config_var('ENV', app).startswith('dev'):
    script_origins = ['*']
    cors = CORS(app, origins=script_origins)
    app.config['CORS_HEADERS'] = 'Content-Type'
    dist_folder = os.path.abspath(os.path.join(app.root_path,"../../static"))
    app.static_folder = dist_folder
    app.static_url_path='/static'
    app_path = app.root_path
    app.url_map.strict_slashes = False
    config_cls = ConfigHelper.set_config(sys.argv)
    app.config.from_object(config_cls)
    register_blueprints(app)
    
    import_modules('server/src/api')
    import_modules('server/src/pages')
    #import_modules('server/src/infrastructure/db_models') # Import database models

    redist_host = '127.0.0.1' if get_config_var('ENV', app=app) == 'dev' else get_config_var('REDIS_PROD', app=app)
    redis_connection = f'redis://{redist_host}:6379'

    register_extensions(app)
    register_components(app)
    init_global_functions(app)
    if config_cls == ProductionConfig:
        Talisman(app, content_security_policy=None)
    return app


# automate
# what if any other blueprint would register itself?
def register_blueprints(app):
    '''
    from server.src.app.auth.auth_blueprint import auth_blueprint
    from server.src.app.dashboard.dashboard_blueprint import dashboard_blueprint
    from server.src.app.adminDashboard.admin_dashboard_blueprint import admin_dashboard_blueprint

    blueprints = [dashboard_blueprint, auth_blueprint, admin_dashboard_blueprint] 
    for blueprint in blueprints:
        app.register_blueprint(blueprint)
    '''
    '''from .blueprints import auth_api_blueprint, dashboard_api_blueprint, integration_api_blueprint, \
                            admin_dashboard_api_blueprint, page_blueprint, public_api_blueprint#'''

    # All prefixes are in the blueprints' definitions
    '''
    prefixes = {
        'dashboard': '/dashboard/api', 
        'admin_dashboard': '/admin',
       # 'auth': '/auth'
    }
    '''

    '''blueprints = [page_blueprint, auth_api_blueprint, dashboard_api_blueprint, integration_api_blueprint,
                    admin_dashboard_api_blueprint, public_api_blueprint]#] '''
    
    from server.src.infrastructure import blueprints

    for name, obj in inspect.getmembers(blueprints):
        if isinstance(obj, Blueprint):
            app.register_blueprint(obj)

    '''for blueprint in blueprints:
        app.register_blueprint(blueprint)'''
    '''
    if prefixes.get(blueprint.name) is not None:
        app.register_blueprint(blueprint, url_prefix=prefixes[blueprint.name])
    else:
        app.register_blueprint(blueprint)
    '''
'''
def register_api():
    folder = Path.joinpath(Path.cwd(), 'src/app')

    for root, dirs, files in os.walk(folder):
        for f in files:
            if os.path.splitext(f)[1] == '.py':
                rel = root.replace(folder._str, '')
                module_name = 'src.app' + rel.replace('\\', '.').replace('/', '.') + '.' + f.replace('.py', '')
                if '_api' in module_name:
                    module_spec = importlib.util.find_spec(module_name)
                    if module_spec:
                        namespace_module = importlib.import_module(module_name)
'''

def import_modules(folder_name):
    folder = Path.joinpath(Path.cwd(), folder_name)
    named_path = folder_name.replace('/', '.')
    for root, dirs, files in os.walk(folder):
        for f in files:
            if os.path.splitext(f)[1] == '.py':
                rel = root.replace(folder._str, '')
                module_name = named_path + rel.replace('\\', '.').replace('/', '.') + '.' + f.replace('.py', '')
                module_spec = importlib.util.find_spec(module_name)
                if module_spec:
                    namespace_module = importlib.import_module(module_name)

def init_global_functions(app):
    from server.src.infrastructure.utils import global_functions
    global_functions.init(app)

def register_extensions(app):
    global redis_connection
    db.init_app(app)
    db_schema.init_app(app)
    mail.init_app(app)
    alembic.init_app(app)
    login_manager.init_app(app)
    #socketio.run(app, allow_unsafe_werkzeug=True, debug=False, host='0.0.0.0', port=5008, use_reloader=False)

def __register_module(app, module_file):
    start_index = module_file.parts.index('server')
    qualified_name = '.'.join(module_file.parts[start_index:]).replace('.py', '')
    module_spec = importlib.util.find_spec(qualified_name)
    if module_spec:
        component_module = importlib.import_module(qualified_name)
        if hasattr(component_module, 'init_app'):
            init_app = getattr(component_module, 'init_app')
            if init_app:
                init_app(app)

def __register_components_auto(folder, app):
    for module in folder.iterdir():
        if module.is_dir():
            for module_file in module.iterdir():
                if module_file.is_file() and module_file.suffix == '.py':
                    __register_module(app, module_file)
        elif module.is_file() and module.suffix == '.py':
            # It's a file, register directly
            __register_module(app, module)


def register_components(app): # TODO: not working now
    '''
    Automatically registers all module that need some initializing with application.
    To-do: make it not only for shared modules
    '''
    folders = ['server/src/api', 'server/src/infrastructure/services']
    for folder in folders:
        component_folder = Path.joinpath(Path.cwd(), folder)
        if component_folder.exists():
            __register_components_auto(component_folder, app)