from pathlib import Path
import importlib, glob
from flask import current_app
from server.src.infrastructure.utils.extensions import db, alembic
from server.src.infrastructure.services.aws_s3_service import send_env_vars
from server.config import ConfigHelper

from server.src.infrastructure.db_models.user import User
from server.src.infrastructure.db_models.role import Role

#Dynamic import of models
print ('Dynamic import')
models_folder = [Path.joinpath(Path.cwd(), 'server/src/infrastructure/db_models')]
models_folder += list(map(lambda path: Path.joinpath(Path.cwd(), path), glob.glob('server/src/infrastructure/*/db_models')))

for model_folder in models_folder:
    for module in model_folder.iterdir():
        if module.is_file():
            start_index = module.parts.index('server')
            import_parts = module.parts[start_index:] #list(filter(lambda part: , module.parts))
            importlib.import_module('.'.join(import_parts).replace('.py', ''))


def db_update(app):
    with app.app_context():
        print('updating database')
        alembic.revision('made changes')
        alembic.upgrade()

'''
For debugging:
use this code
def create_db_with_dropping_first(app):
    with app.app_context():
        print('dropping all')
        ...

and make a call in application.py:

application = create_app()
from server.infrastructure.utils.db_scaffold import create_db_with_dropping_first
create_db_with_dropping_first(application)
'''

def db_create(app, drop_tables_first=False):
    #app = current_app._get_current_object()
    with app.app_context():
        if drop_tables_first:
            print('dropping all')
            db.drop_all() 
        print('creating all')
        db.create_all()

        admin_role = Role(name = 'Admin')
        user_role = Role(name = 'User', is_default = True)
        db.session.add(admin_role)
        db.session.add(user_role)
        db.session.commit()
