import React from "react";
import { TextField, Button, Container } from "@material-ui/core";
import "katex/dist/katex.min.css";
import { InlineMath, BlockMath } from "react-katex";

export const Input3D = props => (
	<React.Fragment>
		<Container>
			<TextField
				id="zEquation"
				name="zEquation"
				className={props.classes.textField}
				label="Enter Z-Equation"
				margin="normal"
				onChange={props.handleChange}
			></TextField>
		</Container>

		<Container>
			<TextField
				id="xStart"
				name="xStart"
				className={props.classes.textField}
				label="xStart"
				margin="normal"
				onChange={props.handleChange}
			></TextField>
			<TextField
				id="xEnd"
				name="xEnd"
				className={props.classes.textField}
				label="xEnd"
				margin="normal"
				onChange={props.handleChange}
			></TextField>
		</Container>

		<Container>
			<TextField
				id="yStart"
				name="yStart"
				className={props.classes.textField}
				label="yStart"
				margin="normal"
				onChange={props.handleChange}
			></TextField>
			<TextField
				id="yEnd"
				name="yEnd"
				className={props.classes.textField}
				label="yEnd"
				margin="normal"
				onChange={props.handleChange}
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
