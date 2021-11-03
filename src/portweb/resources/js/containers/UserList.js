

import React from "react";

import { connect } from "react-redux";

import * as CA from "../actions/CommonAction";
import * as usersAction from '../actions/UsersAction';

import { ResponsiveDrawer } from "../components/Drawer";

import { UserSearchForm } from "../Forms/UserSearchForm";
import { UserSearchResultForm } from "../Grids/SearchResultForm";

class UserList extends React.Component {
    //初回のみ実行する処理
    componentDidMount() {
        this.props.clearUserState()
    }

    render() {
        const PageSet = (
            <div>
                <UserSearchForm props={this.props.userData} prop={this.props} />
                <UserSearchResultForm userData={this.props.userData} />
            </div>
        );

        return <ResponsiveDrawer pageName={"ユーザ一覧"} data={PageSet} props={this.props}/>;
    }
}

const mapStateToProps = state => (
    {
        userData: state.userData,
    commonState: state.CommonState

    }
)

const mapDispatchToProps = dispatch => (
    {
        clearUserState: () => dispatch(usersAction.clearUserState()),
        initUserData: (d) => dispatch(usersAction.initUserData(d)),
        updateUserName: (d) => dispatch(usersAction.updateUserName(d)),
        updateAuthority: (d) => dispatch(usersAction.updateAuthority(d)),
        updateUserList: (d) => dispatch(usersAction.updateUserList(d)),

        UpdateProgressState: d => dispatch(CA.UpdateProgressState(d)),
        UpdateSnackbarState: d => dispatch(CA.UpdateSnackbarState(d)),
    UpdateServerResult: d => dispatch(CA.UpdateServerResult(d)),

    }
)

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

