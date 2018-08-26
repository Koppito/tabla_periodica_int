from flask import *

from flask_restful import Api
from map_endpoints import map_endpoints

def create_app():
    app = Flask(__name__)
    api = Api(app)

    map_endpoints(api)

    return app
