from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID, JSONB
from flask_sqlalchemy import SQLAlchemy
import uuid

from server.src.infrastructure.utils.extensions import db
from .generic_entity import GenericEntity

class LogEvent(db.Model, GenericEntity):
    __tablename__ = 'log_event'
    id = db.Column(UUID(as_uuid=True),
        primary_key=True, default=lambda: uuid.uuid4().hex)
    enabled = db.Column(db.Boolean, default=True, server_default='t')
    event_code = db.Column(db.String(300)) # Unique event code
    local_vars = db.Column(JSONB(), nullable=True) # List the local vars that should be collected and write to the data field of log entry.