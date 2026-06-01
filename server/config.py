from cryptography.fernet import Fernet
from dotenv import load_dotenv
load_dotenv()

import os
from server.src.infrastructure.utils.global_functions import parse_list_var

basedir = os.path.abspath(os.path.dirname(__file__))

#key = Fernet.generate_key()

class Config(object):
    ENV = ''
    DEBUG = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SQLALCHEMY_DATABASE_URI = os.environ.get('DB_URL') # Store it in the hosting config
    SQLALCHEMY_ENGINE_OPTIONS = {
        'pool_size': 20,
        'pool_reset_on_return': 'commit', # looks like postgres likes this more than rollback
        'pool_timeout': 5, # try a low value here maybe
    }
    COMPANY_NAME = 'Lagoono' # Change to your company name
    JWT_SECRET_KEY = os.environ.get('JWT_SECRET_KEY')
    SECRET_KEY = os.environ.get('SECRET_KEY')

    # Social logins
    SOCIAL_LOGINS  = parse_list_var(os.environ.get('SOCIAL_LOGINS'))
    # Google
    GOOGLE_CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET')
    GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID')

    # User admin pagination
    USERS_PER_PAGE = os.environ.get('USERS_PER_PAGE') or 20

    # AWS
    AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID')
    AWS_SECRET_KEY = os.environ.get('AWS_SECRET_KEY')
    AWS_BUCKET_NAME = os.environ.get('AWS_BUCKET_NAME') # Create additional variables for other buckets

    # DEPLOY (in case the deploy server is different, for the test server, for example)
    AWS_ACCESS_KEY_ID_DEPLOY = os.environ.get('AWS_ACCESS_KEY_ID_DEPLOY') or os.environ.get('AWS_ACCESS_KEY_ID')
    AWS_SECRET_KEY_DEPLOY = os.environ.get('AWS_SECRET_KEY_DEPLOY') or os.environ.get('AWS_SECRET_KEY')

    # AWS SES
    SES_AWS_ACCESS_KEY_ID=os.environ.get('SES_AWS_ACCESS_KEY_ID')
    SES_AWS_SECRET_KEY = os.environ.get('SES_AWS_SECRET_KEY')

    # Email settings
    MAIL_SERVER = os.environ.get('MAIL_SERVER')
    MAIL_PORT = os.environ.get('MAIL_PORT')
    MAIL_USE_SSL = True if os.getenv('MAIL_USE_SSL') == 'True' else False
    MAIL_USE_TLS = True if os.getenv('MAIL_USE_TLS') == 'True' else False
    MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
    MAIL_DEFAULT_SENDER = os.environ.get('MAIL_DEFAULT_SENDER')
    MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')
    ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL')

    PROPAGATE_EXCEPTIONS = True

class ProductionConfig(Config):
    ENV = 'prod'
    DEBUG = False
    DOMAIN_URL = 'https://app.lagoono.com'

class DevelopmentConfig(Config):
    ENV = 'dev'
    DEVELOPMENT = True
    DEBUG = True

    DOMAIN_URL = 'http://127.0.0.1:5013'

class TestingConfig(Config):
    ENV = 'test'
    DEBUG = False
    DOMAIN_URL = 'https://test867-z.lagoono.com/'

config = {
    'dev': DevelopmentConfig,
    'test': TestingConfig,
    'prod': ProductionConfig,
    'default' : DevelopmentConfig
}


class ConfigHelper:

    # Allows setting config from argument, or from "env" environment variable (see Activate.bat)

    @staticmethod
    def __check_config_name(env_name):
        return env_name is not None and env_name != '' and env_name in config is not None

    @staticmethod
    def set_config(args):
        if (args is not None and len(args) > 1):
            # Check argument
            if ConfigHelper.__check_config_name(args[1]):
                return config[args[1]]
        
        # Check os env var
        env = os.environ.get('ENV')
        print('=== ENV var =', env)
        if ConfigHelper.__check_config_name(env):
            if config.get(env):
                return config.get(env)

        # Nothing worked, return default config
        return config['default']
