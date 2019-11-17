import python.helper.algebra
import python.helper.algebra3d
from flask import Flask
from flask import jsonify


app = Flask(__name__)


@app.route("/3D")
def algebra3D_API():
    dict = {'left': 0.17037454, 'right': 0.82339555, '_unknown_': 0.0059609693}
    message = {
        'status': 200,
        'message': 'OK',
        'scores': dict

    }
    resp = jsonify(message)
    resp.status_code = 200
    print(resp)
    return resp


@app.route("/")
def hello_world():
    return "hello world!"
