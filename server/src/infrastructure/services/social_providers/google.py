import requests
from google.oauth2 import id_token
from google.auth.transport import requests
from server.src.infrastructure.db_models.consts.result_type import Result
from server.src.infrastructure.utils.global_functions import get_config_var

def validate_login(token):
    user_data = None
    try:
        # Specify the CLIENT_ID of the app that accesses the backend:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), get_config_var('GOOGLE_CLIENT_ID'))

        if idinfo['iss'] not in ['accounts.google.com', 'https://accounts.google.com']:
            return Result(False, error='Wrong issuer... pleasey refresh the page and try again.')

        # ID token is valid. Get the user's Google Account ID from the decoded token.
        userid = idinfo['sub']
        user_data = {
            'social_id': userid,
            'email': idinfo.get('email'),
            'username': idinfo.get('name')
        }
    except ValueError:
        # Invalid token
        return Result(False, error='Google token is invalid... please refresh the page and try again.')
    return Result(True, item=user_data)