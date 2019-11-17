import React from "react";
import { TextField, Button, Container } from "@material-ui/core";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const Input3D = props => (
	<React.Fragment>
		<Container>
			<TextField
				id="zEquation"
				className={props.classes.textField}
				label="Enter Z-Equation"
				margin="normal"
			></TextField>
		</Container>

		<Container>
			<TextField
				id="xStart"
				className={props.classes.textField}
				label="xStart"
				margin="normal"
			></TextField>
			<TextField
				id="y"
				className={props.classes.textField}
				label="xEnd"
				margin="normal"
			></TextField>
		</Container>

		<Container>
			<TextField
				id="xEnd"
				className={props.classes.textField}
				label="yStart"
				margin="normal"
			></TextField>
			<TextField
				id="yEnd"
				className={props.classes.textField}
				label="yStart"
				margin="normal"
			></TextField>
		</Container>

		<Container>
			<InlineMath>{"x^2+3x"}</InlineMath>
		</Container>
		<Container>
			<Button variant="contained" color="primary">
				Plot
			</Button>
		</Container>
	</React.Fragment>
);

export default Input3D;
