import numpy as np
import sympy as sp
from sympy.parsing.sympy_parser import (
    parse_expr, standard_transformations, implicit_multiplication, implicit_application)

transformations = standard_transformations + \
    (implicit_multiplication, implicit_application)

x, y, z = sp.symbols("x y z")


def getExpr(Eq):
    # Converting to Equation
    Eq = Eq.replace("^", "**")
    expr = parse_expr(Eq, transformations=transformations)

    return expr


def getStringEq(Eq):
    Eq = str(getExpr(Eq))
    Eq = Eq.replace("**", "^")
    return Eq


def getLatexEq(Eq):
    return sp.latex(getExpr(Eq))
