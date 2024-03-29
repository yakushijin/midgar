import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import styled from "styled-components";

import Menu from "../containers/Menu";
import { LinearIndeterminate, ProgressBackdrop } from "./Progress";
import { DirectionSnackbar } from "./Snackbar";
import { ComponentsZindex } from "../GlobalConst";

const DivCenter = styled.div`
    text-align: center;
`;

const LogoStyle = styled.button`
    text-align: center;
    margin: 14px;
    padding: 4px 30px;
    background: #0000ff;
    border-radius: 6px;
    border: solid 1px #0000aa;
    color: #111;
    font-size: 16px;
    cursor: pointer;
`;

const drawerWidth = 280;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            background: "#262449"
        },
        zIndex: ComponentsZindex.DrawerToolbar
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    appToolbar: {
        background: "#262449",
        zIndex: ComponentsZindex.DrawerToolbar
    },
    drawerPaper: {
        width: drawerWidth,
        background: "#000027",
        zIndex: ComponentsZindex.DrawerMenu
    },
    content: {
        flexGrow: 1,
        padding: "20px 8px",
        width: "100%",
        overflow: "auto"
    }
}));

export const ResponsiveDrawer = ({ pageName, data, props }) => {
    // const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <DivCenter>
                <form id="topButton" action="/" ></form>
                <LogoStyle form="topButton">ロゴ/トップ</LogoStyle>
            </DivCenter>
            <Menu />
        </div>
    );

    // const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <ProgressBackdrop props={props} />
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.appToolbar}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        {pageName}
                    </Typography>
                </Toolbar>
                <LinearIndeterminate props={props} />
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        // container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main className={classes.content}>
                {/* <div className={classes.toolbar} /> */}
                {data}
                <DirectionSnackbar props={props} />
            </main>
        </div>
    );
};

// ResponsiveDrawer.propTypes = {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

export default ResponsiveDrawer;
