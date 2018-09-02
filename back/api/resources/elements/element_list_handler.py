from flask_restful import Resource
from flask import jsonify

from .get_elements import get_all_elements

class ElementListHandler(Resource):
    def get(self):
        elements = get_all_elements()
        return jsonify(total=len(elements), elements=elements)
