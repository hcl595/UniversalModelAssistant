from flask import Flask, Blueprint
from flask_socketio import SocketIO

socketio = SocketIO()

def create_app(debug=True):
    '''Create an application.'''
    app = Flask(__name__)
    from flask_cors import CORS
    
    CORS(app)
    app.debug = debug
    app.config['SECRET_KEY'] = 'IntelliFusion'

    from widgets import widgets_blue

    app.register_blueprint(widgets_blue)


widgets_blue = Blueprint('widgets', __name__, url_prefix='/widgets', static_folder='./static/', template_folder='./templates/')

from . import views