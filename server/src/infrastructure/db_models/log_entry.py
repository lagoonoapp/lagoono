from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID, JSONB
from flask_sqlalchemy import SQLAlchemy
import uuid

from server.src.infrastructure.utils.extensions import db
from .generic_entity import GenericEntity

class LogEntry(db.Model, GenericEntity):
    __tablename__ = 'log_entry'
    id = db.Column(UUID(as_uuid=True),
        primary_key=True, default=lambda: uuid.uuid4().hex)
    type = db.Column(db.String(20)) # 'info', 'error'
    title = db.Column(db.String(300)) # Title

    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('user.id'))
    user = db.relationship('User', back_populates='log_entries')

    data = db.Column(JSONB(), nullable=True) # Any additional data to be stored
    event_code = db.Column(db.String(300))
    user_ui = db.Column(db.Boolean, default=False, server_default='f') # If true, this error will be shown in the user's dashboard