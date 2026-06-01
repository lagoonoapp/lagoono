import requests
from flask import render_template, request, abort, make_response, redirect, url_for
from flask_restful import Resource, Api
from flask_login import login_required as flask_login_required
from server.src.infrastructure.utils.wrappers import pages_route

from server.src.infrastructure.utils.user_auth_wrapper import admin_required

@pages_route('/admin')
class GetDashboardNoPath(Resource):
    @admin_required
    def get(self):
        '''
        try:
            verify_jwt_in_request()
        except Exception as ex:
            print(ex)
        user_id = get_jwt_identity()
        '''
        return make_response(render_template('app/adminDashboard/adminDashboard.html'))


@pages_route('/admin/<string:path>')
class GetDashboard(Resource):
    @admin_required
    def get(self, path):
        '''
        try:
            verify_jwt_in_request()
        except Exception as ex:
            print(ex)
        user_id = get_jwt_identity()
        '''
        return make_response(render_template('app/adminDashboard/adminDashboard.html'))
