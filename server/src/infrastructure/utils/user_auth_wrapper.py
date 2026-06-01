from flask import request, current_app, redirect, jsonify, render_template
from flask_login import current_user
from flask_login.config import EXEMPT_METHODS
from functools import wraps

# Remove or replace this line to switch another way to authenticate
from flask_jwt_extended import jwt_required, get_jwt_identity

def login_required(func):
    # Replace this line
    return jwt_required()(func)

# Use this wrapper if you don't require user to be authenticated.
# To check if user is logged in, call get_current_user_id - it will return user's id
# if a user is logged in else None
def login_optional(func):
    return jwt_required(optional=True)(func)

# Replace this line for any other authentication provider
'''
Returns the current user id
'''
def get_current_user_id():
    return get_jwt_identity()

# Use this wrapper to protect pages and API calls
def admin_required(func):
    @wraps(func)
    def custom_decorated_view_for_page(*args, **kwargs):
        path_parts = request.path.split('/')
        if request.method in EXEMPT_METHODS:
            return func(*args, **kwargs)
        elif current_app.login_manager._login_disabled:
            return func(*args, **kwargs)
        elif not current_user.is_authenticated:
            return redirect('/auth/login')
        elif current_user.is_authenticated: 
            if current_user.role.name != 'Admin':
                if 'api' in path_parts:
                    return jsonify({
                        'result': False,
                        'error': 'You are not authorized. Please re-login and try again.'
                    })
                else:
                    print('ERROR: Unauthorized access to ', request.url)
                    return render_template('/app/error/error.html', error_code = 401, error_text = 'Unauthorized access'), 401
            else:
                return func(*args, **kwargs)
        return func(*args, **kwargs)
    return custom_decorated_view_for_page