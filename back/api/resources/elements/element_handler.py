from flask_restful import Resource, reqparse
from flask import jsonify

from .get_elements import get_element

def parse_args():
    parser = reqparse.RequestParser()
    return parser.parse_args()

class ElementHandler(Resource):
    def get(self, element_ID):
        element = get_element(element_ID)
        return jsonify(element)

    def post(self):
        return "TODO: Not implemented"
