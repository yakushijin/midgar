import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import { DefaultButton } from "../components/Button";
import styled from "styled-components";

import { PageName, PageUrl } from "../GlobalConst";

const LogoutButtonStyle = styled.button`
    text-align: center;
    margin: 14px;
    padding: 4px 10px;
    background: #0000ff;
    border-radius: 6px;
    border: solid 1px #0000ff;
    color: #eee;
    font-size: 16px;
    cursor: pointer;
`;

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        maxWidth: 360
        // backgroundColor: theme.palette.background.paper,
    },
    text: {
        "&:focus, &:hover, &:visited, &:link, &:active": {
            textDecoration: "none",
            color: "#eee"
        }
    },
    dividerStyle: {
        background: "#555"
    }
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Divider className={classes.dividerStyle} />
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <Link to={PageUrl.UserList} className={classes.text}>
                        <ListItemText primary={PageName.UserList} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link >
                    {/* <Link to={PageUrl.UserEdit} className={classes.text}> */}
                        <ListItemText primary={PageName.UserEdit} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link >
                    {/* <Link to={PageUrl.UserInvite} className={classes.text}> */}
                        <ListItemText primary={PageName.UserInvite} />
                    </Link>
                </ListItem>
            </List>
            <Divider className={classes.dividerStyle} />
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <Link to={PageUrl.GroupEdit} className={classes.text}>
                        <ListItemText primary={PageName.GroupEdit} />
                    </Link>
                </ListItem>
            </List>

            <Divider className={classes.dividerStyle} />
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <Link to={PageUrl.EngineerList} className={classes.text}>
                        <ListItemText primary={PageName.EngineerList} />
                    </Link>
                </ListItem>
                <ListItem button>
                    <Link to={PageUrl.EngineerEdit} className={classes.text}>
                        <ListItemText primary={PageName.EngineerEdit} />
                    </Link>
                </ListItem>
            </List>
            <Divider className={classes.dividerStyle} />
            <Logout />
        </div>
    );
}

const Logout = () => {
    const csrf_tocken = document.getElementById("csrf").value;
    return (
        <React.Fragment>
            <form id="logoutButton" action="/logout" method="POST">
                <input type="hidden" name="_token" value={csrf_tocken}></input>
            </form>
            <LogoutButtonStyle form="logoutButton">
                ログアウト
            </LogoutButtonStyle>
        </React.Fragment>
    );
};
