from . import db

class Job(db.Model):
    __tablename__ = 'jobs'

    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False)
    price = db.Column(db.Numeric(10, 2), nullable=True)  # Fundi quote
    budget = db.Column(db.Numeric(10, 2), nullable=True)  # Client’s budget

    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'), nullable=False)  # Who posted the job
    fundi_id = db.Column(db.Integer, db.ForeignKey('fundis.id'), nullable=True)  # Who took the job

    # Relationships
    client = db.relationship('Client', back_populates='jobs')
    fundi = db.relationship('Fundi', back_populates='jobs')
