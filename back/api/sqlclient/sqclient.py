from flaskext.mysql import MySQL
from pymysql.cursors import DictCursor

class DBInstance:
    def start_DB(self, app, config):
        instance  = MySQL(cursorclass=DictCursor)
        user      = config["mysql"]["user"]
        password  = config["mysql"]["password"]
        database  = config["mysql"]["database"]
        host      = config["mysql"]["host"]

        app.config['MYSQL_DATABASE_USER']      = user
        app.config['MYSQL_DATABASE_PASSWORD']  = password
        app.config['MYSQL_DATABASE_DB']        = database
        app.config['MYSQL_DATABASE_HOST']      = host
        instance.init_app(app)

        self.instance = instance
        print("MySQL client initialized..")

    def exec_query(self, query, params):
        with self.instance.connect() as conn:
            conn.execute(query, params)
            return conn.fetchall()


DB_INSTANCE = DBInstance()
