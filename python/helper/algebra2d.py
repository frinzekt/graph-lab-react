import numpy as np
import sympy as sp
from . import algebra as alg

x, y = sp.symbols("x y")


def getXYValuesFromYEq(yEq, xStart, xEnd):
    # Function of y
    expr = alg.getExpr(yEq)
    fy = sp.lambdify([x], expr)

    # Setup of x and y Values
    xVals = np.arange(xStart, xEnd + 1)

    y1 = np.array(fy(xVals))

    # For Constant Values Lambdify
    if (np.size(y1) == 1):
        y1 = np.ndarray((len(xVals)))
        y1.fill(fy(0))

    return xVals, y1


def getXYValuesFromXEq(xEq, yStart, yEnd):
    # Function of x
    expr = alg.getExpr(xEq)
    fx = sp.lambdify([y], expr)

    # Setup of x and y Values
    yVals = np.arange(yStart, yEnd + 1)

    x1 = np.array(fx(yVals))

    # For Constant Values Lambdify
    if (np.size(x1) == 1):
        x1 = np.ndarray((len(yVals)))
        x1.fill(fx(0))

    return x1, yVals
