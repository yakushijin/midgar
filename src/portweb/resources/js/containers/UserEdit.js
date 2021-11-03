import React from "react";

import { connect } from "react-redux";

import * as usersAction from "../actions/UsersAction";
import * as CA from "../actions/CommonAction";
import { UserForms } from "../Forms/UserForms";
import { ResponsiveDrawer } from "../components/Drawer";
import serverConnection from "../server/Interface";

// import { ResponsiveDrawer } from "../components/Snackbar";

class UserEdit extends React.Component {
    componentDidMount() {
        serverConnection("userget", this.props.userData, this.props);
    }

    render() {
        const UserDataDisp = ({ props }) => {
            return <UserForms props={props} />;
        };

        const PageSet = <UserDataDisp props={this.props} />;
        return (
            <ResponsiveDrawer
                pageName={"ユーザ編集"}
                data={PageSet}
                props={this.props}
            />
        );
    }
}

const mapStateToProps = state => ({
    userData: state.userData,
    commonState: state.CommonState
});

const mapDispatchToProps = dispatch => ({
    initUserDetailData: d => dispatch(usersAction.initUserDetailData(d)),
    updateUserName: d => dispatch(usersAction.updateUserName(d)),
    updateUserEmail: d => dispatch(usersAction.updateUserEmail(d)),
    updateAuthority: d => dispatch(usersAction.updateAuthority(d)),
    updateUserList: d => dispatch(usersAction.updateUserList(d)),

    UpdateProgressState: d => dispatch(CA.UpdateProgressState(d)),
    UpdateSnackbarState: d => dispatch(CA.UpdateSnackbarState(d)),
    UpdateServerResult: d => dispatch(CA.UpdateServerResult(d)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEdit);
