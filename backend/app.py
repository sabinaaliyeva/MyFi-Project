from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_login import LoginManager
from flask_cors import CORS

# Initialize Flask App
app = Flask(__name__)
CORS(app)

# Configuration
app.config['SECRET_KEY'] = 'your_secret_key'  # Change this to a secure key
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:password@localhost/network_tool_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Initialize Extensions
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
login_manager = LoginManager(app)
login_manager.login_view = 'login'

# Import Routes (will create these next)
from routes.auth_routes import auth_bp
from routes.dashboard_routes import dashboard_bp
from routes.settings_routes import settings_bp

# Register Blueprints
app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(dashboard_bp, url_prefix="/dashboard")
app.register_blueprint(settings_bp, url_prefix="/settings")

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
