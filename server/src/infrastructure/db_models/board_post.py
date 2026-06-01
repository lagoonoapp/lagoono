from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID, JSONB
from flask_sqlalchemy import SQLAlchemy
import uuid

from server.src.infrastructure.utils.extensions import db
from .generic_entity import GenericEntity

class BoardPost(db.Model, GenericEntity):
    __tablename__ = 'board_post'
    id = db.Column(UUID(as_uuid=True),
        primary_key=True, default=lambda: uuid.uuid4().hex)
    private = db.Column(db.Boolean, default=False, server_default='f', nullable=True)
    title = db.Column(db.String(400))
    slug = db.Column(db.String(500))
    text = db.Column(db.String())
    text_preview = db.Column(db.String())
    short_id = db.Column(db.String(30))
    category = db.Column(db.String(40)) # 
    type = db.Column(db.String(30)) # bugreport, suggestion, etc.
    tags = db.Column(JSONB(), nullable=True) # List of tags
    status = db.Column(db.String(30)) # new
    progress_status = db.Column(db.String(30)) # new, inreview
    reason = db.Column(db.String(30), nullable=True) # explanation for changing the status, 'duplicate', 'offtopic', etc.
    status_change_comment = db.Column(db.String(300), nullable=True) # Short comment on change status
    status_change_date = db.Column(db.DateTime(), nullable=True)
    history = db.Column(JSONB(), nullable=True) # Event history for the post
    upvotes = db.Column(JSONB(), nullable=True) # List of users' IDs
    downvotes = db.Column(JSONB(), nullable=True) # List of users' IDs
    views = db.Column(db.Integer(), default = 0)
    published_once = db.Column(db.Boolean, default=False, server_default='f', nullable=True)

    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('user.id'))
    user = db.relationship('User', back_populates='boardposts')

    comments = db.relationship('BoardComment', back_populates='post', lazy='dynamic', cascade='delete')