import requests
from flask import jsonify, render_template, send_file, Response, current_app, request, make_response, redirect, url_for
from flask_jwt_extended import (create_access_token, unset_access_cookies,
                                create_refresh_token, set_access_cookies, set_refresh_cookies,
                                jwt_required, get_jwt_identity, unset_jwt_cookies)

from flask_jwt_extended.default_callbacks import (
    default_revoked_token_callback,
    default_expired_token_callback,
    default_invalid_token_callback,
    default_unauthorized_callback
)

#from server.src.infrastructure.utils.extensions import db, db_schema

from flask_jwt_extended import JWTManager
jwt = JWTManager()

def init_app(app):
    jwt.init_app(app)
    ##jwt._set_error_handler_callbacks(jwt_api)
    #app.config['JWT_ACCESS_TOKEN_EXPIRES'] = 30 # To test
    #app.config['JWT_REFRESH_TOKEN_EXPIRES'] = 60 # To test
    ################ Make it True! ###################
    app.config['JWT_COOKIE_SECURE'] = False 
    app.config['JWT_COOKIE_CSRF_PROTECT'] = False
    ##################################################
    app.config['JWT_TOKEN_LOCATION'] = ['cookies']
    app.config['JWT_ACCESS_COOKIE_PATH'] = '/api'
    app.config['JWT_REFRESH_COOKIE_PATH'] = '/api/auth'


def login_create_tokens(user_id, redirect_url):
    access_token = create_access_token(identity = user_id)
    refresh_token = create_refresh_token(identity = user_id)
    login_response = jsonify({
        'result': True, 
        'redirect': redirect_url # Redirect to /dashboard when login was successful
    })
    set_access_cookies(login_response, access_token)
    set_refresh_cookies(login_response, refresh_token)
    return login_response

def logout():
    logout_response = jsonify({'result': True})
    unset_jwt_cookies(logout_response)
    return logout_response

@jwt_required(refresh=True)
def token_refresh():
    user_id = get_jwt_identity()
    access_token = create_access_token(identity = user_id)
    refresh_response = jsonify({'result': True})
    set_access_cookies(refresh_response, access_token)
    return refresh_response

'''
@jwt_required(refresh=True)
def token_refresh_for_backend(url):
    user_id = get_jwt_identity()
    access_token = create_access_token(identity=user_id)
    refresh_response = make_response(redirect(url, 302))
    set_access_cookies(resp, access_token)
    return refresh_response
'''

@jwt.invalid_token_loader
def invalid_token_handler(data):
    '''
    This may happen when, for example, user changes URL - redirecting to sign in screen.
    '''
    return redirect('/auth/login')

@jwt.unauthorized_loader
def unauthorized_loader_handler(message):
    '''
    This may happen when, for example, user changes URL - redirecting to sign in screen.
    '''
    print('Unathorized attempt: ', message)
    return redirect('/auth/login')

@jwt.expired_token_loader
def expired_token_callback(jwt_header, jwt_payload):
    request.data
    return default_expired_token_callback(jwt_header, jwt_payload)

'''
@jwt.expired_token_loader
def expired_token_loader_handler(jwt_header, jwt_payload):
    return jsonify(code="dave", err="I can't let you do that"), 401


@jwt.expired_token_loader
def expired_token_callback(callback):
    # Expired auth header

    #refresh_url = request.host_url + 'api/auth/token/refresh'
    #resp = requests.post(refresh_url)
    #return make_response(redirect(request.base_url, 200))

    #resp = make_response(redirect(request.host_url + 'api/auth/token/refresh'))
    #unset_access_cookies(resp)
    #refresh_response = make_response(resp)
    #return redirect(request.base_url)



    user_id = get_jwt_identity()
    access_token = create_access_token(identity = user_id)
    response = redirect(request.url)
    response.headers['Authorization'] = "Bearer " + access_token
    return make_response(response)
'''

'''
@jwt.expired_token_loader
def expired_token_callback(callback):
    # Expired auth header
    resp = make_response(redirect(request.host_url + 'api/auth/token/refresh?backurl=' + request.url))
    #unset_access_cookies(resp)
    return resp, 302

'''