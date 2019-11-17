import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	toolbar: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	toolbarTitle: {
		flex: 1
	},
	toolbarSecondary: {
		justifyContent: "space-between",
		overflowX: "auto"
	},
	toolbarLink: {
		padding: theme.spacing(1),
		flexShrink: 0
	},
	mainFeaturedPost: {
		position: "relative",
		backgroundColor: theme.palette.grey[800],
		color: theme.palette.common.white,
		marginBottom: theme.spacing(4),
		backgroundImage: "url(https://source.unsplash.com/user/erondu)",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center"
	},
	overlay: {
		position: "absolute",
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: "rgba(0,0,0,.3)"
	},
	mainFeaturedPostContent: {
		position: "relative",
		padding: theme.spacing(3),
		[theme.breakpoints.up("md")]: {
			padding: theme.spacing(6),
			paddingRight: 0
		}
	},
	mainGrid: {
		marginTop: theme.spacing(3)
	},
	card: {
		display: "flex"
	},
	cardDetails: {
		flex: 1
	},
	cardMedia: {
		width: 160
	},
	markdown: {
		...theme.typography.body2,
		padding: theme.spacing(3, 0)
	},
	sidebarAboutBox: {
		padding: theme.spacing(2),
		backgroundColor: theme.palette.grey[200]
	},
	sidebarSection: {
		marginTop: theme.spacing(3)
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		marginTop: theme.spacing(8),
		padding: theme.spacing(6, 0)
	}
}));
export default function Nav() {
	const classes = useStyles();
	return (
		<React.Fragment>
			<AppBar position="fixed">
				<Toolbar className={classes.toolbar}>
					<Typography
						variant="h6"
						component="h2"
						color="inherit"
						align="center"
						className={classes.toolbarTitle}
					>
						Graph Lab
					</Typography>
				</Toolbar>
			</AppBar>
			<Toolbar
				component="nav"
				variant="dense"
				className={classes.toolbarSecondary}
			>
				2d
			</Toolbar>
			<Typography variant="subtitle1" color="inherit" align="center">
				<Tabs centered value={1} indicatorColor="primary">
					<Tab label="2D"></Tab>
					<Tab label="3D"></Tab>
				</Tabs>
			</Typography>
		</React.Fragment>
	);
}
