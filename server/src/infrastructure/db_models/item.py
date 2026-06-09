from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID
from flask_sqlalchemy import SQLAlchemy
import uuid

from server.src.infrastructure.utils.extensions import db
from .generic_entity import GenericEntity

class Item(db.Model, GenericEntity):
    __tablename__ = 'item'
    id = db.Column(UUID(as_uuid=True),
        primary_key=True, default=lambda: uuid.uuid4().hex)
    name = db.Column(db.String(64))

    #nested_items = db.relationship('Item', back_populates='parent_item')
    #parent_item = db.relationship('Item', back_populates='nested_items', remote_side=[id])
    
    item_type_id = db.Column(UUID(as_uuid=True), db.ForeignKey('item_type.id'))
    item_type = db.relationship('ItemType', back_populates='items')

    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('user.id'))
    user = db.relationship('User', back_populates='items')
