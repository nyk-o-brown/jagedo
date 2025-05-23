from flask_sqlalchemy import SQLAlchemy

db=SQLAlchemy()

from .user import User
from .client import Client
from .fundi import Fundi
from .job import Job