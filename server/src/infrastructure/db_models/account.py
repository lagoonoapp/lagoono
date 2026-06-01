from datetime import datetime
import uuid
from flask import current_app, request, url_for
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.dialects.postgresql import UUID, JSONB

from server.src.infrastructure.utils.extensions import db
from server.src.infrastructure.db_models.account_history import AccountHistory
from .generic_entity import GenericEntity

class Account(db.Model, GenericEntity):
    __tablename__ = 'account'
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=lambda: uuid.uuid4().hex)
    user = db.relationship('User', back_populates='account')
    account_history = db.relationship("AccountHistory", backref='account', lazy='dynamic')
    current_status = db.Column(db.String(32), nullable=True) # valid/invalid

    def create_history_event(self, event_type: str, event: str, comment = '', data=None):
        new_event = AccountHistory()
        new_event.account_id = self.id
        new_event.date = datetime.now()
        new_event.event_type = event_type
        new_event.event = event
        new_event.comment = comment
        new_event.data = data
        db.session.add(new_event)