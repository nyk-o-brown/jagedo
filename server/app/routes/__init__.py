from flask import Blueprint

routes = Blueprint('routes', __name__)

from .user import *
from .client import *
from .fundi import *
from .job import *