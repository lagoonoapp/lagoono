from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID, JSONB
from flask_sqlalchemy import SQLAlchemy
import uuid

from server.src.infrastructure.utils.extensions import db
from .generic_entity import GenericEntity

class ItemType(db.Model, GenericEntity):
    __tablename__ = 'item_type'
    id = db.Column(UUID(as_uuid=True),
        primary_key=True, default=lambda: uuid.uuid4().hex)
    code_name = db.Column(db.String(64), unique=True)
    description = db.Column(db.String(200))
    singular_name = db.Column(db.String(64))
    plural_name = db.Column(db.String(64))
    fields = db.Column(JSONB(), nullable=True)

    items = db.relationship('Item', back_populates='item_type', lazy='dynamic', cascade='delete')