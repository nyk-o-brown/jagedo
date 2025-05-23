from . import db

class Fundi(db.Model):
    __tablename__ = 'fundis'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    rating = db.Column(db.Numeric(3, 2), nullable=True)
    certificate = db.Column(db.String(255), nullable=True)
    job_completed = db.Column(db.Boolean, default=False)
    message = db.Column(db.Text, nullable=True)
    job_description = db.Column(db.Text, nullable=True) 
    status = db.Column(db.String(50), default='available')

    # Relationships
    user = db.relationship('User', back_populates='fundi_profile')
    jobs = db.relationship('Job', back_populates='fundi')
