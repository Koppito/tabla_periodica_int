from resources import *

def map_endpoints(api):
    api.add_resource(PingHandler, "/ping")
    api.add_resource(ElementHandler, "/element")
