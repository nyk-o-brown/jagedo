from . import db

class Client(db.Model):
    __tablename__ = 'clients'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    job_description_file = db.Column(db.String(255), nullable=True)
    job_description = db.Column(db.Text, nullable=True)

    # Relationships
    user = db.relationship('User', back_populates='client_profile')
    jobs = db.relationship('Job', back_populates='client')
