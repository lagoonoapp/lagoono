from flask_sqlalchemy import SQLAlchemy as _BaseSQLAlchemy
from flask_marshmallow import Marshmallow
from flask_mail import Mail
from flask_alembic import Alembic
from flask_login import LoginManager
#from flask_sock import Sock

class SQLAlchemy(_BaseSQLAlchemy):
    def apply_pool_defaults(self, app, options):
        super(SQLAlchemy, self).apply_pool_defaults(self, app, options)
        options["pool_pre_ping"] = True

db = SQLAlchemy()
db_schema = Marshmallow()
mail = Mail()
alembic = Alembic()
login_manager = LoginManager()