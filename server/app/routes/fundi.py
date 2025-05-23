from flask import request, jsonify, abort
from ..models.fundi import Fundi
from ..models import db
from . import routes


def get_or_404(model, id):
    item = model.query.get(id)
    if not item:
        abort(404, f"{model.__name__} with ID {id} not found")
    return item

@routes.route('/fundis', methods=['GET'])
def get_all_fundis():
    fundis = Fundi.query.all()
    return jsonify([{'id': f.id, 'user_id': f.user_id, 'status': f.status} for f in fundis])

@routes.route('/fundis', methods=['POST'])
def create_fundi():
    data = request.json
    fundi = Fundi(user_id=data['user_id'], rating=data.get('rating'), certificate=data.get('certificate'),
                  job_completed=data.get('job_completed', False), message=data.get('message'),
                  job_description=data.get('job_description'), status=data.get('status', 'available'))
    db.session.add(fundi)
    db.session.commit()
    return jsonify({'id': fundi.id}), 201

@routes.route('/fundis/<int:id>', methods=['GET'])
def get_fundi(id):
    fundi = get_or_404(Fundi, id)
    return jsonify({'id': fundi.id, 'status': fundi.status})

@routes.route('/fundis/<int:id>', methods=['PUT'])
def update_fundi(id):
    fundi = get_or_404(Fundi, id)
    data = request.json
    fundi.rating = data.get('rating', fundi.rating)
    fundi.certificate = data.get('certificate', fundi.certificate)
    fundi.job_completed = data.get('job_completed', fundi.job_completed)
    fundi.message = data.get('message', fundi.message)
    fundi.job_description = data.get('job_description', fundi.job_description)
    fundi.status = data.get('status', fundi.status)
    db.session.commit()
    return jsonify({'message': 'Fundi updated'})

@routes.route('/fundis/<int:id>', methods=['DELETE'])
def delete_fundi(id):
    fundi = get_or_404(Fundi, id)
    db.session.delete(fundi)
    db.session.commit()
    return jsonify({'message': 'Fundi deleted'})
