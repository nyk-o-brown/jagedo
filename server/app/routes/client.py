from flask import request, jsonify, abort
from ..models.client import Client
from ..models import db
from . import routes


def get_or_404(model, id):
    item = model.query.get(id)
    if not item:
        abort(404, f"{model.__name__} with ID {id} not found")
    return item

@routes.route('/clients', methods=['GET'])
def get_all_clients():
    clients = Client.query.all()
    return jsonify([{'id': c.id, 'user_id': c.user_id} for c in clients])

@routes.route('/clients', methods=['POST'])
def create_client():
    data = request.json
    client = Client(user_id=data['user_id'], job_description=data.get('job_description'), job_description_file=data.get('job_description_file'))
    db.session.add(client)
    db.session.commit()
    return jsonify({'id': client.id}), 201

@routes.route('/clients/<int:id>', methods=['GET'])
def get_client(id):
    client = get_or_404(Client, id)
    return jsonify({'id': client.id, 'user_id': client.user_id})

@routes.route('/clients/<int:id>', methods=['PUT'])
def update_client(id):
    client = get_or_404(Client, id)
    data = request.json
    client.job_description = data.get('job_description', client.job_description)
    client.job_description_file = data.get('job_description_file', client.job_description_file)
    db.session.commit()
    return jsonify({'message': 'Client updated'})

@routes.route('/clients/<int:id>', methods=['DELETE'])
def delete_client(id):
    client = get_or_404(Client, id)
    db.session.delete(client)
    db.session.commit()
    return jsonify({'message': 'Client deleted'})
