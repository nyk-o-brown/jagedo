from flask import request, jsonify, abort
from ..models.job import Job
from ..models import db
from . import routes


def get_or_404(model, id):
    item = model.query.get(id)
    if not item:
        abort(404, f"{model.__name__} with ID {id} not found")
    return item

@routes.route('/jobs', methods=['GET'])
def get_all_jobs():
    jobs = Job.query.all()
    return jsonify([{
        'id': j.id,
        'description': j.description,
        'budget': str(j.budget),
        'client_id': j.client_id,
        'fundi_id': j.fundi_id
    } for j in jobs])

@routes.route('/jobs', methods=['POST'])
def create_job():
    data = request.json
    job = Job(description=data['description'], price=data.get('price'), budget=data.get('budget'),
              client_id=data['client_id'], fundi_id=data.get('fundi_id'))
    db.session.add(job)
    db.session.commit()
    return jsonify({'id': job.id}), 201

@routes.route('/jobs/<int:id>', methods=['GET'])
def get_job(id):
    job = get_or_404(Job, id)
    return jsonify({'id': job.id, 'description': job.description, 'budget': str(job.budget)})

@routes.route('/jobs/<int:id>', methods=['PUT'])
def update_job(id):
    job = get_or_404(Job, id)
    data = request.json
    job.description = data.get('description', job.description)
    job.price = data.get('price', job.price)
    job.budget = data.get('budget', job.budget)
    job.client_id = data.get('client_id', job.client_id)
    job.fundi_id = data.get('fundi_id', job.fundi_id)
    db.session.commit()
    return jsonify({'message': 'Job updated'})

@routes.route('/jobs/<int:id>', methods=['DELETE'])
def delete_job(id):
    job = get_or_404(Job, id)
    db.session.delete(job)
    db.session.commit()
    return jsonify({'message': 'Job deleted'})
