import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField } from "@material-ui/core";
import Plot from "react-plotly.js";
import Nav from "./components/nav";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

import Plot3D from "./components/Plot3D";
import Input3D from "./components/Input3D";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap"
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	}
}));

export default class App extends React.Component {
	

	componentDidMount() {
		const classes = useStyles();
		console.log(classes);
	}

	handleChange(e){
		
	}

	return (
		<React.Fragment>
			<Nav></Nav>

			<Grid
				container
				direction="row"
				justify="space-evenly"
				alignItems="center"
				alignContent="center"
			>
				<Grid item md={6} className="text-right">
					<Input3D classes={classes}></Input3D>
				</Grid>
				<Grid item md={6}>
					<Plot3D></Plot3D>
				</Grid>
			</Grid>
		</React.Fragment>
	);
}
