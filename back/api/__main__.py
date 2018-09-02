import yaml

from create_api import create_app

# Load config
with open("./config.yaml", "r") as config_file:
    config = yaml.load(config_file)

api = create_app(config)

host = config["api"]["host"]
port = config["api"]["port"]
api_name = config["api"]["name"]

print("Starting app {}..".format(api_name))
api.run(host=host, port=port)
