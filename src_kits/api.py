# main.py | Intellifusion Version 0.3.0(2024102412000) Developer Alpha
# headers
from setup import setup
setup()

from concurrent.futures import ThreadPoolExecutor
from typing import Literal, TypedDict
from urllib.parse import urlparse
import socketserver
from concurrent.futures import ProcessPoolExecutor
from tkinter.filedialog import askopenfilename

from flask import Flask, stream_with_context, json, jsonify, render_template, request
from loguru import logger
from playhouse.shortcuts import model_to_dict
from peewee import fn

from config import Settings
from data import Models, Sessions
from models import *

pool = ThreadPoolExecutor()

# configs
app = Flask(__name__)
app.config.from_object(__name__)
from setup import APP_DIR
DATA_DIR = APP_DIR / "data"
DICT_DIR = APP_DIR / "dicts" / "dict.txt"
LOG_FILE = DATA_DIR / "models.log"

# setup
logger.add(LOG_FILE)
cfg = Settings()


# main
@app.route("/")  # 根目录
def root():
    return jsonify({"version":"0.0.1"})
    

@app.post("/request_models_stream")
@stream_with_context
def request_models_stream():
    InputInfo = request.form.get("userinput")
    InputModel = request.form["modelinput"]
    print(InputModel,InputInfo)
    if Models.get(Models.id == Sessions.get(Sessions.id == InputModel).model_id).type == "OpenAI":
        try:
            Model_response = request_OpenAI(SessionID=InputModel, Userinput=InputInfo, stream=True)
            for r in Model_response:
                yield r
        except :
            yield "Check Your API Key"



@app.errorhandler(404)
def error404(error):
    return jsonify({error: "404 not found"})



# class
class Message(TypedDict):
    role: str
    content: str

# functions
def get_free_port():
    with socketserver.TCPServer(("localhost", 0), None) as s:
        free_port = s.server_address[1]
    return free_port

def getfile():
    with ProcessPoolExecutor() as p:
        r = p.submit(askopenfilename)
    str(r)
    return r.result()

# launch
if __name__ == "__main__":
    logger.info("API(v0.0.1 ∂) Launched!")
    # pmt.get_json()
    port=get_free_port()
    logger.level("DEBUG")
    logger.debug("running in api mode")
    app.run(
        debug=True,
        port=port,
        host="127.0.0.1",
    )

