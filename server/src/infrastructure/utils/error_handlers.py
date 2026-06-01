import jwt
import traceback

from flask import jsonify, request
from werkzeug.exceptions import HTTPException
from sqlalchemy.exc import SQLAlchemyError
from werkzeug.exceptions import MethodNotAllowed, NotFound, Unauthorized

from server.src.infrastructure.services.logging import log_entry_type, log_service
from server.src.infrastructure.utils.global_functions import print_traceback

from server.src.infrastructure.blueprints import page_blueprint, admin_dashboard_api_blueprint, \
                                                    auth_api_blueprint, dashboard_api_blueprint, public_api_blueprint

'''
Error handlers registered to the Flask object
i.e., Flask may through 
'''

### dashboard_api_blueprint ###

@dashboard_api_blueprint.app_errorhandler(SQLAlchemyError)
def handle_sqlalchemy_error(ex):
    '''
    In the case of a SQLAlchemy error, logs may no longer be stored inside the database
    Send error details to an administrative email account
    '''

    print_traceback(ex)

    # TODO:
    #  render a templated email to describe the error (using traceback, exception_class, current date-time and
    #  possible other descriptors?), and send to a designated administrator email

    try:
        log_service.write_log('API 500 Exception', log_entry_type.LogEntryType.exception, 
                    'Exceptions fired inside the application', None, None, locals(), traceback=traceback)
    except Exception as ex2:
        print_traceback(ex2)

    return jsonify({
        'error': 'An error has occurred. Please contact your system administrator.'
    }), 500


@dashboard_api_blueprint.app_errorhandler(Exception)  # 500
def handle_unknown_error(ex):
    traceback = print_traceback(ex)
    log_service.write_log('API 500 Exception', log_entry_type.LogEntryType.exception, 
                    'Exceptions fired during API call', None, None, locals(), traceback=traceback)
    return jsonify({'error': 'An error has occurred. Please contact your system administrator.'}), 500


@dashboard_api_blueprint.app_errorhandler(NotFound)  # 404
def handle_page_not_found(ex):
    traceback = print_traceback(ex)
    log_service.write_log('API 404 Exception', log_entry_type.LogEntryType.exception, 
                    'Exceptions fired during API call', None, None, locals(), traceback=traceback)
    return {'error': 'The requested URL was not found on the server'}, 404


@dashboard_api_blueprint.app_errorhandler(Unauthorized)  # 401
def handle_unauthorized_error(ex):
    traceback = print_traceback(ex)
    log_service.write_log('API 401 Exception', log_entry_type.LogEntryType.exception, 
                    'Exceptions fired during API call', None, None, locals(), traceback=traceback)
    return jsonify({'error': 'Authentication Error'}), 401


@dashboard_api_blueprint.app_errorhandler(MethodNotAllowed)  # 405
def handle_method_not_allowed(ex):
    traceback = print_traceback(ex)
    details = f'Url: {request.url}, method: {request.method}, origin URL: {request.referrer}'
    log_service.write_log('API 405 Exception', log_entry_type.LogEntryType.exception, 
                    'Exceptions fired during API call', None, None, locals(), traceback=traceback, details=details)
    return jsonify({'error': 'Method Not Allowed'}), 405


def custom_api_error_handler(sender, **kwargs):
    payload = {
        'type': 'InternalServerError',
        'description': 'Internal Error',
        'method': request.method,
        'url': request.url
        }
    status_code = 500
    ex = kwargs.get('exception')
    traceback = None

    if (ex is not None and isinstance(ex, jwt.ExpiredSignatureError)):
        return jsonify(payload), status_code

    try:
        if ex is not None:
            traceback = print_traceback(ex)
            if isinstance(ex, HTTPException):
                payload['type'] = 'HTTPException'
                payload['description'] = ex.description
                status_code = ex.code
            else:
                payload['description'] = ex.args if hasattr(ex, 'args') else 'Exception'
                status_code = 500
        else:
            payload['description'] += str(kwargs)
    except Exception as inner_ex:
        print_traceback(inner_ex)


    try:
        log_service.write_log('API 500 Exception CUSTOM', log_entry_type.LogEntryType.exception, 
                    'Exceptions fired inside the application', None, None, locals(), traceback=traceback, payload=payload)
    except Exception as ex2:
        print_traceback(ex2)
    
    return 'ok', 200 # jsonify(payload), status_code