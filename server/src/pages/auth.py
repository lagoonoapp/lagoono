import requests
from flask import Blueprint, render_template, request, abort, make_response, redirect
#from flask_restplus import Namespace, Resource, Api
from flask_restful import Api, Resource
from server.src.infrastructure.utils.wrappers import pages_route

from server.src.infrastructure.utils.global_functions import get_config_var


def get_social_logins():
    social_logins_data = {
            'google': {
                'client_id': get_config_var('GOOGLE_CLIENT_ID')
            }
        }
    return dict(map(lambda social_login_name: (social_login_name, 
                                                social_logins_data.get(social_login_name)), 
                                                get_config_var('SOCIAL_LOGINS')))


@pages_route('/auth/register')
class RegisterRequests(Resource):
    def get(self):

        social_logins_data = get_social_logins()

        return make_response(render_template('auth.html', 
                                social_logins_data = social_logins_data,
                                social_login_names = list(social_logins_data.keys()))
        )

@pages_route('/auth/<path:path>', methods=['GET'])
class AllAuthRequests(Resource):
    def get(self, path):
        social_logins_data = get_social_logins()
        return make_response(render_template('auth.html',
                                social_logins_data = social_logins_data,
                                social_login_names = list(social_logins_data.keys()))
        )

@pages_route('/auth/logout', methods=['GET'])
class UserLogout(Resource):
    def get(self):
        requests.post(f'{request.host_url}api/auth/logout')
        social_logins_data = get_social_logins()
        return make_response(render_template('auth.html',
                                social_logins_data = social_logins_data,
                                social_login_names = list(social_logins_data.keys()))
        )