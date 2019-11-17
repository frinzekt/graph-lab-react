import numpy as np
import sympy as sp
from sympy.parsing.sympy_parser import (
    parse_expr, standard_transformations, implicit_multiplication, implicit_application)

transformations = standard_transformations + \
    (implicit_multiplication, implicit_application)

x, y, z = sp.symbols("x y z")


def getZSurface(zEq, xStart, yStart, xEnd, yEnd):
    # Function of z
    zEq = zEq.replace("^", "**")
    expr = parse_expr(zEq, transformations=transformations)
    fz = sp.lambdify([x, y], expr)

    # Setup of x and y Values
    xVals = np.arange(xStart, xEnd+1)
    yVals = np.arange(yStart, yEnd + 1)

    xGrid, yGrid = np.meshgrid(xVals, yVals)
    z1 = np.array(fz(xGrid, yGrid))

    # For Constant Values Lambdify
    if (np.size(z1) == 1):
        z1 = np.ndarray((len(xVals), len(yVals)))
        z1.fill(fz(0, 0))

    return z1


def getZMesh(zEq, start, end):
    # Function of z
    zEq = zEq.replace("^", "**")
    expr = parse_expr(zEq, transformations=transformations)
    fz = sp.lambdify([x, y], expr)

    # Setup of Values
    Vals = np.arange(start, end+1)

    z1 = np.array(fz(Vals, Vals))

    # For Constant Values Lambdify
    if (np.size(z1) == 1):
        z1 = np.ndarray((len(Vals), len(Vals)))
        z1.fill(fz(0, 0))

    return z1

