import numpy as np
import sympy as sp
from sympy.parsing.sympy_parser import (
    parse_expr, standard_transformations, implicit_multiplication, implicit_application)

transformations = standard_transformations + \
    (implicit_multiplication, implicit_application)

x, y = sp.symbols("x y")


def getXYValuesFromYEq(yEq, xStart, xEnd):
    # Function of z
    yEq = yEq.replace("^", "**")
    expr = parse_expr(yEq, transformations=transformations)
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
    # Function of z
    xEq = xEq.replace("^", "**")
    expr = parse_expr(xEq, transformations=transformations)
    fx = sp.lambdify([y], expr)

    # Setup of x and y Values
    yVals = np.arange(yStart, yEnd + 1)

    x1 = np.array(fx(yVals))

    # For Constant Values Lambdify
    if (np.size(x1) == 1):
        x1 = np.ndarray((len(yVals)))
        x1.fill(fx(0))

    return x1, yVals
