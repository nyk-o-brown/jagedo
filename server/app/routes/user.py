from flask import request, jsonify, abort
from ..models.user import User
from ..models import db
from . import routes


def get_or_404(model, id):
    item = model.query.get(id)
    if not item:
        abort(404, f"{model.__name__} with ID {id} not found")
    return item

@routes.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()
    return jsonify([{'id': u.id, 'email': u.email, 'role': u.role} for u in users])


@routes.route('/users', methods=['POST'])
def create_user():
    data = request.json
    user = User(email=data['email'], password=data['password'], role=data['role'])
    db.session.add(user)
    db.session.commit()
    return jsonify({'id': user.id}), 201

@routes.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = get_or_404(User, id)
    return jsonify({'id': user.id, 'email': user.email, 'role': user.role})

@routes.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = get_or_404(User, id)
    data = request.json
    user.email = data.get('email', user.email)
    user.password = data.get('password', user.password)
    db.session.commit()
    return jsonify({'message': 'User updated'})

@routes.route('/users/<int:id>', methods=['DELETE'])
def delete_user(id):
    user = get_or_404(User, id)
    db.session.delete(user)
    db.session.commit()
    return jsonify({'message': 'User deleted'})
