from flask import *

from flask_restful import Api
from map_endpoints import map_endpoints
from sqlclient import DB_INSTANCE
from flask_cors import CORS

def create_app(config):
    app  = Flask(__name__)
    api  = Api(app)
    cors = CORS(app, resources={r"/*": {"origins": "*"}})

    DB_INSTANCE.start_DB(app, config)
    map_endpoints(api)

    return app
