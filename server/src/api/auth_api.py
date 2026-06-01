from flask import jsonify, render_template, send_file, Response, current_app, request, make_response, redirect, url_for
from flask_login import login_user, logout_user, login_required, current_user
from flask_login.config import EXEMPT_METHODS
from flask_marshmallow import Marshmallow
from marshmallow import fields, validate, ValidationError, EXCLUDE, INCLUDE
from flask_restful import Resource
#from pydispatch import dispatcher
from functools import wraps
from server.src.infrastructure.utils.wrappers import auth_route
from server.src.infrastructure.utils.global_functions import request_payload

from server.src.infrastructure.utils.global_functions import get_config_var
from server.src.infrastructure.utils.extensions import db, db_schema, login_manager
from server.src.infrastructure.db_models.consts.event_type import EventType
from server.src.infrastructure.services.social_providers import google
from server.src.infrastructure.services import subscribe_email_service
from server.src.infrastructure.services.email.transactional_email_service import send_user_transactional_email


# Adapters
from server.src.infrastructure.services import db_user_service

# Modules
from server.src.api import jwt_api as jwt_api

# Services
from server.src.infrastructure.services.email import email_service

#auth_logic_api = Namespace('auth_logic_api', path ='/api/auth/')
#jwt_api.jwt._set_error_handler_callbacks(auth_logic_api)

def send_verification_email(user, token, action, template_name, subject):
    confirmation_link = f'{request.host_url}auth/{action}/{token}/{user.id}'
    if 'asdf' in user.email:
        print('==Link to confirm email: ==', confirmation_link)
        return
    text_body = render_template('email_templates/{0}.txt'.format(template_name), 
                                user_name = user.username, 
                                company_name = get_config_var('COMPANY_NAME'), 
                                confirmation_link = confirmation_link)
    html_body = render_template('email_templates/{0}.html'.format(template_name), 
                                user_name = user.username, 
                                company_name = get_config_var('COMPANY_NAME'), 
                                confirmation_link = confirmation_link)
    email_service.send_email(user.email, '{0}: {1}'.format(get_config_var('COMPANY_NAME'), subject), text_body, html_body, 
                            get_config_var('COMPANY_NAME'),
                            get_config_var('MAIL_DEFAULT_SENDER'))

def validate_social_login(social_provider, social_token):
    if social_provider == 'google':
        return google.validate_login(social_token)

@auth_route('/register')
class user_registration(Resource):
    def post(self):
        username, email, password, social_provider, social_token, query = request_payload('username'), \
                                                request_payload('email'), \
                                                request_payload('password'), \
                                                request_payload('socialProvider'), \
                                                request_payload('socialToken'), \
                                                request_payload('query')
        social_id = None

        if social_provider is None and social_token is None:
            if username is None or email is None or password is None:
                return jsonify({
                    'result': False,
                    'error': 'Username, email, or password is not provided'
                })
        else:
            validation_social_data = validate_social_login(social_provider, social_token)
            if not validation_social_data.result:
                return jsonify({
                    'result': False,
                    'error': validation_social_data.error
                })
            else:
                social_id = validation_social_data.item.get('social_id')
                email = validation_social_data.item.get('email')
                username = validation_social_data.item.get('username')

        existing_user = db_user_service.find_user_by_email(email)
        if existing_user is not None:
            # Maybe if user already exists and password/token is verified, just do login?
            return jsonify({
                'result': False,
                'code': 'exists'
            })

        # New user has been created but not saved
        new_user = db_user_service.create_user(username, email, password, social_provider, social_id)
        
        if new_user is not None and new_user.id is not None:
            # 2. Generate confirmation token
            token = new_user.generate_verification_token()

            # 3. Generate email bodies and send confirmation link asynchronously
            send_verification_email(new_user, token, action='confirm', 
                                    template_name='confirmation_template',
                                    subject='Confirm your registration')           

            # 4. Inform frontend to redirect to the confirmatiuon page
            confirm_email_page_url = '/auth/finishregister/' + str(new_user.id)

            return  jsonify({
                    'result': True,
                    'redirect': confirm_email_page_url
                })
        else:
            return {
                'result': False,
                'error': 'Something went wrong, could not register a user, please try again.'
            }

@auth_route('/login')
class user_login(Resource):
    def post(self):
        email, password, social_provider, social_token, query = request_payload('email'), \
                                                        request_payload('password'), \
                                                        request_payload('socialProvider'), \
                                                        request_payload('socialToken'), \
                                                        request_payload('query')
        validation_social_data = None
        social_id = None
        user_verified = False

        if social_provider is None and social_token is None:
            if email is None:
                    return jsonify({
                        'result': False,
                        'error': 'Email is not provided'
                    })
            if password is None:
                return jsonify({
                    'result': False,
                    'error': 'Email or password is not provided'
                })
        else:
            validation_social_data = validate_social_login(social_provider, social_token)
            if not validation_social_data.result:
                return jsonify({
                    'result': False,
                    'error': validation_social_data.error
                })
            else:
                social_id = validation_social_data.item.get('social_id')
                email = validation_social_data.item.get('email')
                username = validation_social_data.item.get('username')
                user_verified = True

        existing_user = db_user_service.find_user_by_email(email)
        
        if existing_user is None:
            return jsonify({
                'result': False,
                'error': 'User does not exist or never being confirmed.'
            })
        else:
            if social_id is None and validation_social_data is None:
                if existing_user.enabled:
                    user_verified = existing_user.verify_hash(password)
                else:
                    return jsonify({
                        'result': False,
                        'error': 'User account has been disabled.'
                    })

        if user_verified:
            if existing_user.confirmed == False:
                # Inform frontend to redirect to the confirmatiuon page
                token = existing_user.generate_verification_token()
                send_verification_email(existing_user, token, action='confirm', 
                                        template_name='confirmation_template',
                                        subject='Confirm your registration')
                confirm_email_page_url = '/auth/finishregister/' + str(existing_user.id)
                return  jsonify({
                    'result': False,
                    'error': 'Please confirm your email. You will be redirected to the confirmation page in 3 secods.',
                    'redirect': confirm_email_page_url,
                    'redirectDelay': 3
                })
            # Confirmed
            login_user(existing_user, request_payload('remember'))
            redirect_url = '/'
            #redirect_url = '/admin' if existing_user.role.name == 'Admin' else redirect_url
            login_response = jwt_api.login_create_tokens(existing_user.id, redirect_url)
            return make_response(login_response, 200)
        else:
            return jsonify({
                'result': False,
                'error': 'Email or password is wrong.'
            })


@auth_route('/forgot')
class user_forgot_password(Resource):
    def post(self):
        email = request_payload('email')
        if email is None:
            return jsonify({
                'result': False,
                'error': 'Please provide a non-empty email.'
            })
        # Note: for the security purpose we don't say if user exists or not and send this message no matter
        # if user was found in our database or not.
        message = 'We send the link at the provided email. If you don\'t have it please check your email and enter it again. Another reason you don\'t have email from us is you did\'t registered with our service.'
        existing_user = db_user_service.find_user_by_email(email)
        if existing_user is None:
            return jsonify({
                'result': True, 
                'message': message
            })
        else:
            token = existing_user.generate_verification_token(key='forgot', expiration=1800)
            send_verification_email(existing_user, token, action='resetpassword', 
                                    template_name='reset_password_template',
                                    subject='Request for password reset')
            return  jsonify({
                'result': True,
                'message': message
            })

@auth_route('/logout')
class user_logout(Resource):
    def post(self):
        logout_user() # Session logout
        logout_response = jwt_api.logout() # JWT logout
        return make_response(logout_response, 200)

@auth_route('/token/refresh')        
class user_token_refresh(Resource):
    '''
    This endpoint is called by client to refresh the access token.
    '''
    def post(self):
        refresh_response = jwt_api.token_refresh()
        return make_response(refresh_response, 200)

    def get(self):
        backurl = request.args.get('backurl')
        refresh_response = jwt_api.token_refresh_for_backend(backurl)
        return refresh_response

@auth_route('/resendconfirm/<userid>')
class user_resend_confirm(Resource):
    def get(self, userid):
        user = db_user_service.get_user_by_id(userid)
        if user:  
            token = user.generate_verification_token()
            send_verification_email(user, token, action='confirm', 
                                    template_name='confirmation_template',
                                    subject='Confirm your registration') 
            return  jsonify({
                'result': True,
                #'redirect': '/auth/finishregister/{0}'.format(user.id)
            })
        else:
            return jsonify({
                'result': False,
                'error': 'Sorry but user not found. Please login or register again.'
            })

@auth_route('/confirm/<token>/<userid>')
class user_confirm(Resource):
    def get(self, token, userid):
        user = db_user_service.get_user_by_id(userid)
        #print('!!! Before, user confirmed is ', user.confirmed)
        if user:  
            if not user.confirmed:          
                confirmation_result = user.verify(token)
                if confirmation_result:
                    user.account.create_history_event(EventType.user.value, 'Email confirmed')
                    user.save()

                    # Subscribe a new user for a newsletter
                    try:
                        #print('!!! Before sender')
                        #subscribe_email_service.add_subscriber(user.email, user.username)

                        #print('!!! Before mailbluster')
                        subscribe_email_service.add_subscriber_mailbuster(user.email, user.username)
                    except Exception as ex:
                        print('!!!! Something went wrong')
                        print(ex)
                        pass

                    # Send them welcome email
                    send_user_transactional_email(user.email, 'welcome', 'Welcome to Lagoono: useful info inside', None, None)
                
                else:
                    # The token probably expired, so send a new confirmation email
                    token = user.generate_verification_token()
                    send_verification_email(user, token, action='confirm', 
                                            template_name='confirmation_template',
                                            subject='Confirm your registration') 
                    return jsonify({
                        'result': False,
                        #'redirect': '/auth/finishregister/{0}'.format(user.id),
                        #'redirectDelay': 3,
                        'code': 'expired',
                        'error': 'Sorry but your token probably expired. We have sent you a new confirmation email - please check your email box and try again.'
                    })
            # User is confirmed, but we have to logout to make sure that THIS exact user will login then.
            return  jsonify({
                'result': True
            })
        else:
            return jsonify({
                'result': False,
                'code': 'nouser',
                'error': 'Sorry but user not found. Please login or register again.'
            })

@auth_route('/resetpassword')
class user_reset_password(Resource):
    def post(self):
        userid, token, password = request_payload('userid'),\
                                    request_payload('token'),\
                                    request_payload('password')
        user = db_user_service.get_user_by_id(userid)
        if user:
            verification_result = user.verify(token, key='forgot') 
            if verification_result:
                user.set_password(password)
                user.save()
                return jsonify({
                    'result': True,
                    'redirect': '/auth/login',
                    'redirectDelay': 3
                })
            else:
                return jsonify({
                    'result': False,
                    'error': 'Your token probably expired.'
                })
        else:
            return jsonify({
                'result': False,
                'error': 'Your token probably expired.'
            })

@login_manager.unauthorized_handler
def unauthorized_handler():
    query = ''
    if request.query_string is not None:
        query = '?' + request.query_string.decode()
    return redirect(f'/auth/login{query}')
