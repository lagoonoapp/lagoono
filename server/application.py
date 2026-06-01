import click, os, sys
from datetime import datetime
from flask import send_from_directory, current_app, render_template, make_response, request
from flask.cli import with_appcontext
from server.src.infrastructure.app_factory import create_app
from server.src.infrastructure.services.logging import log_service, log_entry_type
from server.src.infrastructure.utils.global_functions import get_message_from_exception, print_traceback

'''cwd = os.getcwd()

# Add the 'project' directory to the Python path
project_dir = os.path.join(cwd, 'server')
sys.path.append(project_dir)'''

# Application factory
application = create_app()

# Init custom static folder
@application.route('/custom_static/<path:filename>')
def custom_static(filename):
    return send_from_directory(application.root_path, filename)

@application.errorhandler(Exception)
def handle_exception(e):
    # pass through HTTP errors

    message = get_message_from_exception(e, 'Some error occured during creating an index... please try again.')
    traceback = print_traceback(e) # TODO: Log an error
    log_service.write_log('FatalException', log_entry_type.LogEntryType.exception, 
        'Exception that crashes the server', 
        None, None,
        locals(), traceback=traceback, message=message)

    if isinstance(e, HTTPException):
        return e
    


    # now you're handling non-HTTP exceptions only
    error_code = e.code if hasattr(e, 'code') else 500
    return make_response(render_template('error.html', error_code=error_code)), 200 # error_code #render_template("500_generic.html", e=e), 500

@application.errorhandler(404)
def page_not_found(ex):
    return make_response(render_template('error.html', error_code = ex.code)), ex.code

@application.errorhandler(405)
def error_405(ex):
    return make_response(render_template('error.html', error_code = ex.code)), ex.code

@application.errorhandler(500)
def not_handled_exception(ex):
    # to-do: Log the problem
    print('Server-side ERROR: ', ex)
    message = ex.message if hasattr(ex, 'message') else (
                ex.description if hasattr(ex, 'description') else 'Some error occured... please try again')
    return make_response(render_template('app/error/error.html', error_code = 500, error_text = message)), 500

from werkzeug.exceptions import HTTPException

#@application.cli.command()
#@with_appcontext
def dbupdate():
    from server.src.infrastructure.utils.db_scaffold import db_update
    db_update(application)

#@application.cli.command()
#@with_appcontext
def dbcreate():
    from server.src.infrastructure.utils.db_scaffold import db_create
    db_create(application)




## Call command once here. Don't forget to comment it after
#dbcreate()
#dbupdate()


#sendenv()