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
	state = {
		zEquation: "x^2+2x",
		xStart: 0,
		yStart: 0,
		xEnd: 10,
		yEnd: 10,

		graphData: {},
		loading: true
	};

	reloadPlot() {
		const url = "http://127.0.0.1:5000/3D";
		const { zEquation, xStart, yStart, xEnd, yEnd } = this.state;
		fetch(url, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				equation: zEquation,
				xStart: parseFloat(xStart),
				yStart: parseFloat(yStart),
				xEnd: parseFloat(xEnd),
				yEnd: parseFloat(yEnd)
			})
		})
			.then(data => data.json())
			.then(data => this.setState({ graphData: data }));
	}

	async componentDidMount() {
		this.reloadPlot();
	}

	handleChange = e => {
		e.preventDefault();
		const { id, value } = e.target;

		// const { name, value } = e.target;
		// let formErrors = this.state.formErrors;

		// switch (name) {
		// 	case "firstName":
		// 		formErrors.firstName =
		// 			value.length < 3 ? "minimum 3 characaters required" : ""; // TERNARY STATEMENT display error or no error
		// 		break;
		// 	case "lastName":
		// 		formErrors.lastName =
		// 			value.length < 3 ? "minimum 3 characaters required" : "";
		// 		break;
		// 	case "email":
		// 		//EMAIL REGEX (regular expression) - tester
		// 		formErrors.email = emailRegex.test(value)
		// 			? ""
		// 			: "invalid email address";
		// 		break;
		// 	case "password":
		// 		formErrors.password =
		// 			value.length < 6 ? "minimum 6 characaters required" : "";
		// 		break;
		// 	default:
		// 		break;
		// }

		// this.setState({ formErrors, [name]: value });
		this.setState({ [id]: value }, () => this.reloadPlot());
	};

	render() {
		const classes = useStyles;

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
						<Input3D
							classes={classes}
							handleChange={this.handleChange}
						></Input3D>
					</Grid>
					<Grid item md={6}>
						<Plot3D {...this.state.graphData}></Plot3D>
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}
