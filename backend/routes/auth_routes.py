from flask import Blueprint, request, jsonify
from app import db, bcrypt
from models import User
from flask_login import login_user, logout_user, login_required

auth_bp = Blueprint('auth', __name__)

# Signup Route
@auth_bp.route("/signup", methods=["POST"])
def signup():
    data = request.json
    hashed_password = bcrypt.generate_password_hash(data['password']).decode('utf-8')
    new_user = User(username=data['username'], email=data['email'], password_hash=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    return jsonify({"message": "User created successfully"}), 201

# Login Route
@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    user = User.query.filter_by(email=data['email']).first()
    if user and bcrypt.check_password_hash(user.password_hash, data['password']):
        login_user(user)
        return jsonify({"message": "Login successful"})
    return jsonify({"message": "Invalid credentials"}), 401

# Logout Route
@auth_bp.route("/logout", methods=["POST"])
@login_required
def logout():
    logout_user()
    return jsonify({"message": "Logout successful"})
