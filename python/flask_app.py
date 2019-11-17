
from flask import Flask
from flask import jsonify
from flask import request
import sys
from helper import algebra
from helper import algebra2d
from helper import algebra3d

app = Flask(__name__)


@app.route("/3D", methods=['POST', 'GET'])
def algebra3D_API():
    # Request Structure:
    #     equation
    #     xStart
    #     yStart
    #     xEnd
    #     yEnd
    # Return Structure:
    #     equation
    #     latex
    #     xValues
    #     yValues
    #     zValues

    # Get Data
    req = request.get_json(force=True)
    print(req)

    # Process Data
    equation = algebra.getStringEq(req['equation'])
    latex = algebra.getLatexEq(equation)
    xStart = req['xStart']
    xEnd = req['xEnd']
    yStart = req['yStart']
    yEnd = req['yEnd']

    xValues, yValues, zValues = algebra3d.getZSurface(
        equation, xStart, yStart, xEnd, yEnd)

    # Package Data
    resp = {
        "equation": equation,
        "latex": latex,
        "xValues": xValues.astype(float).tolist(),
        "yValues": yValues.astype(float).tolist(),
        "zValues": zValues.astype(float).tolist()
    }

    print(resp)

    return jsonify(resp)


@app.route("/2D", methods=['POST', 'GET'])
def algebra2D_API():
    # Request Structure:
    #     Xequation
    #     Yequation
    #     start
    #     end

    # Return Structure:
    #     equation
    #     latex
    #     xValues
    #     yValues

        # Get Data
    req = request.get_json(force=True)
    print(req)

    # Process Data
    Xequation = req['Xequation']
    Yequation = req['Yequation']
    start = req['start']
    end = req['end']

    if(Xequation != ""):
        # Process as equation in terms of y
        equation = algebra.getStringEq(Xequation)
        xValues, yValues = algebra2d.getXYValuesFromXEq(equation, start, end)
    else:
        # Process as equation in terms of x
        equation = algebra.getStringEq(Yequation)
        xValues, yValues = algebra2d.getXYValuesFromYEq(equation, start, end)

    latex = algebra.getLatexEq(equation)

    # Package Data
    resp = {
        "equation": equation,
        "latex": latex,
        "xValues": xValues.astype(float).tolist(),
        "yValues": yValues.astype(float).tolist(),
    }

    print(resp)

    return jsonify(resp)


@app.route("/")
def hello_world():
    return "hello world!"
