from . import db

class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String(255), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    # One-to-one relationships
    client_profile = db.relationship('Client', uselist=False, back_populates='user')
    fundi_profile = db.relationship('Fundi', uselist=False, back_populates='user')
