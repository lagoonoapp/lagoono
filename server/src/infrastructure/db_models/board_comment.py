from datetime import datetime
from sqlalchemy.dialects.postgresql import UUID, JSONB
from flask_sqlalchemy import SQLAlchemy
import uuid

from server.src.infrastructure.utils.extensions import db
from .generic_entity import GenericEntity

class BoardComment(db.Model, GenericEntity):
    __tablename__ = 'board_comment'
    id = db.Column(UUID(as_uuid=True),
        primary_key=True, default=lambda: uuid.uuid4().hex)
    parent_id = db.mapped_column(UUID(as_uuid=True), db.ForeignKey('board_comment.id'))
    text = db.Column(db.String())
    level = db.Column(db.Integer(), default = 0)
    short_id = db.Column(db.String(30))
    status = db.Column(db.String(30)) # new, done, inreview, etc.
    reason = db.Column(db.String(30)) # explanation for changing the status, 'duplicate', 'offtopic', etc.
    status_change_comment = db.Column(db.String(300)) 
    status_change_date = db.Column(db.DateTime(), nullable=True)
    history = db.Column(JSONB(), nullable=True) # Event history for comment

    # Children/parent comments
    children_comments = db.relationship('BoardComment', back_populates="parent_comment")
    parent_comment = db.relationship('BoardComment', back_populates="children_comments", remote_side=[id])

    # Parent post
    post_id = db.Column(UUID(as_uuid=True), db.ForeignKey('board_post.id'))
    post = db.relationship('BoardPost', back_populates='comments')

    # Comment author
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey('user.id'))
    user = db.relationship('User', back_populates='boardcomments')