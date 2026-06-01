import click, os, sys
from flask import send_from_directory, current_app, render_template, make_response, request
from flask.cli import with_appcontext
from server.src.infrastructure.app_factory import create_app

'''cwd = os.getcwd()

# Add the 'project' directory to the Python path
project_dir = os.path.join(cwd, 'server')
sys.path.append(project_dir)'''

# Application factory
application = create_app()

print('created')

@application.cli.command()
@with_appcontext
def dbupdate():
    from server.src.infrastructure.utils.db_scaffold import db_update
    db_update(application)

@application.cli.command()
@with_appcontext
def dbcreate():
    from server.src.infrastructure.utils.db_scaffold import db_create
    db_create(application)



## From your terminal, call the command: flask dbupdate or flask dbcreate
## The command will be run because this file is in the root folder.