from flask import Flask
from .routes import routes
from .models import db
from .config import Config
from flask_migrate import Migrate
from .models import (
        User, Client, Fundi, Job
    )


# Initialize SQLAlchemy
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize SQLAlchemy
    db.init_app(app)
    migrate.init_app(app, db)

    # Register blueprints
    app.register_blueprint(routes, url_prefix='/api')

    return app