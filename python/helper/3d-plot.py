# To add a new cell, type '# %%'
# To add a new markdown cell, type '# %% [markdown]'
# %%
import plotly.graph_objects as go
import numpy as np
import algebra3d as a3d


xStart = -10
yStart = -10

xEnd = 10
yEnd = 10

z1 = a3d.getZSurface("x^3+y^3", xStart, yStart, xEnd, yEnd)
z1_mesh = a3d.getZMesh("x^3+y^3", -10, 10)
z2 = a3d.getZSurface("20", xStart, yStart, xEnd, yEnd)

xVals = np.arange(xStart, xEnd+1)
yVals = np.arange(yStart, yEnd + 1)

fig = go.Figure(data=[
    go.Surface(x=xVals, y=yVals, z=z1, opacity=0.8),
    go.Scatter3d(x=xVals, y=yVals, z=z1, mode="markers",
                 marker=dict(color='rgb(0, 0, 0)', size=2, opacity=0.6)),
    go.Surface(x=xVals, y=yVals, z=z2, showscale=False,
               opacity=0.8, colorscale='YlGnBu')

])

fig.show()


# %%
