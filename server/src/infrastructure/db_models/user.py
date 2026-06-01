from sqlalchemy.dialects.postgresql import UUID, JSONB
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm.attributes import flag_modified
from sqlalchemy.exc import OperationalError
import datetime
import jwt
import time
from typing import List
import uuid

from flask import current_app
from flask_login import UserMixin
from passlib.hash import pbkdf2_sha256 as sha256
#from itsdangerous import TimedJSONWebSignatureSerializer as Serializer

from server.src.infrastructure.utils.extensions import db, login_manager

from .generic_entity import GenericEntity
from server.src.infrastructure.db_models.consts.result_type import Result
from server.src.infrastructure.utils.global_functions import get_config_var, get_field_value, convert_string_to_time
from server.src.infrastructure.db_models.role import Role
from server.src.infrastructure.db_models.account import Account


class User(UserMixin, db.Model, GenericEntity):
    __tablename__ = 'user'

    id = db.Column(UUID(as_uuid=True),
        primary_key=True, default=lambda: uuid.uuid4().hex)
    username = db.Column(db.String(120), nullable = False)
    userpic_url = db.Column(db.String(), nullable = True)
    email = db.Column(db.String(64), unique=True)
    password_hash = db.Column(db.String(120), nullable = False)
    role_id = db.Column(UUID(as_uuid=True), db.ForeignKey('role.id'))
    confirmed = db.Column(db.Boolean, default=False, server_default='f')
    account_id = db.Column(UUID(as_uuid=True), db.ForeignKey('account.id'))
    account = db.relationship('Account', back_populates='user', cascade='all,delete')
    created = db.Column(db.DateTime(), nullable=True)
    enabled = db.Column(db.Boolean, default=True, server_default='t', nullable=True)
    social_provider = db.Column(db.String(120), nullable = True) # For example, 'google'
    social_id = db.Column(db.String(), nullable = True) # Social provider Id

    settings = db.Column(JSONB(), nullable=True)
    notifications = db.Column(JSONB(), nullable=True)


    log_entries = db.relationship('LogEntry', back_populates='user', lazy='dynamic')


    boardposts = db.relationship('BoardPost', back_populates='user', lazy='dynamic')
    boardcomments = db.relationship('BoardComment', back_populates='user', lazy='dynamic')


    signup_data = db.Column(JSONB(), nullable=True) # The data collected during the sign-up process: IP and device info

    def __init__(self, **kwargs):
        super(User, self).__init__(**kwargs)
        if self.role is None:
            admin_emails = get_config_var('ADMIN_EMAIL').split(' ') if get_config_var('ADMIN_EMAIL') is not None else []
            if len(admin_emails) > 0 and self.email in admin_emails:
                self.role = Role.query.filter_by(name='Admin').first()
            else:
                default_role = Role.query.filter_by(is_default=True).first()
                self.role = default_role
        if self.account == None:
            self.account = Account()
        self.enabled = True
    
    def is_admin(self):
        return self.role.name == 'Admin'

    def set_password(self, password):
        '''
        Creates a hash from a password
        '''
        hash = self.generate_hash(password)
        self.password_hash = hash

    @login_manager.user_loader
    def load_user(user_id):
        #return User.query.get(uuid.UUID(user_id))
    
        if isinstance(user_id, str):
            user_id = uuid.UUID(user_id).hex
        user = None
        retries = 1 
        delay = 0.1
        for attempt in range(retries + 1):
            try:
                user = User.query.get(uuid.UUID(user_id))
                return user  # still attached to session!
            except OperationalError as e:
                db.session.rollback()
                if attempt < retries:
                    time.sleep(delay)
                else:
                    raise

    def generate_hash(self, password):
        return sha256.hash(password)

    def verify_hash(self, password):
        return sha256.verify(password, self.password_hash)

    # Is used for confirmation and forgot password feature
    def generate_verification_token(self, key='confirm', expiration=1800):
        secret = get_config_var('SECRET_KEY')
        exp = datetime.datetime.now(tz=datetime.timezone.utc) + datetime.timedelta(seconds=expiration)
        token = jwt.encode({key: self.id.__str__(), 'exp': exp}, secret, algorithm='HS256')
        return token
        #s = Serializer(get_config_var('SECRET_KEY'), expiration)
        #return s.dumps({key: self.id.__str__()}).decode('utf-8')

    def verify(self, token, key='confirm'):
        #s = Serializer(get_config_var('SECRET_KEY'))
        secret = get_config_var('SECRET_KEY')
        try:
            #data = s.loads(token.encode('utf-8'))
            data = jwt.decode(token, secret, algorithms="HS256")
        except Exception as ex:
            return False
        if data.get(key) != self.id.__str__():
            return False
        self.confirmed = True
        return True

