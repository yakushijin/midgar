import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducer from "./reducers";
import UserList from "./containers/UserList";
import UserEdit from "./containers/UserEdit";
import UserInvite from "./containers/UserInvite";
import GroupEdit from "./containers/GroupEdit";
import EngineerList from "./containers/EngineerList";
import EngineerEdit from "./containers/EngineerEdit";
import Top from "./containers/Top";

import { ResponsiveDrawer } from "./components/Drawer";

const store = createStore(reducer);

function App() {
    return (
        <Router>
            <ResponsiveDrawer />
            <Switch>
                <Route path="/" exact component={Top} />
                <Route path="/userlist" component={UserList} />
                <Route path="/useredit" component={UserEdit} />
                <Route path="/userinvite" component={UserInvite} />
                <Route path="/groupedit" component={GroupEdit} />
                <Route path="/engineerlist" component={EngineerList} />
                <Route path="/engineeredit" component={EngineerEdit} />
            </Switch>
        </Router>
    );
}

if (document.getElementById("app")) {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById("app")
    );
}
