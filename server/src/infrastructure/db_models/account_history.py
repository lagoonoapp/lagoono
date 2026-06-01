from datetime import datetime
import uuid
from flask import current_app, request, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import inspect
from sqlalchemy.dialects.postgresql import UUID, JSONB

from server.src.infrastructure.utils.extensions import db
from .generic_entity import GenericEntity
# from server.src.infrastructure.db_models.consts.event_type import get_text_event


class AccountHistory(db.Model, GenericEntity):
    __tablename__ = 'account_history'
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=lambda: uuid.uuid4().hex)
    account_id = db.Column(UUID(as_uuid=True), db.ForeignKey('account.id'))
    date = db.Column(db.DateTime(), nullable=True)
    event_type = db.Column(db.String(32), nullable=True) 
    event = db.Column(db.String(32), nullable=True) # Some text representation of event
    comment = db.Column(db.String(128)) # Text comment
    data = db.Column(JSONB()) # Additional data