import React from "react";

import { connect } from "react-redux";

import * as groupAction from "../actions/GroupAction";
import * as CA from "../actions/CommonAction";

import { ResponsiveDrawer } from "../components/Drawer";

import { GroupForms } from "../Forms/GroupForms";
import { GroupReleaseForms } from "../Forms/GroupReleaseForms";

import serverConnection from "../server/Interface";

class GroupEdit extends React.Component {
    componentDidMount() {
        serverConnection("groupget", this.props.userDetailData, this.props);
    }

    render() {
        const GroupDisp = ({ props }) => {
            return <GroupForms props={props} />;
        };

        const GroupReleaseDisp = ({ props }) => {
            return <GroupReleaseForms props={props} />;
        };

        const PageSet = (
            <div>
                <GroupDisp props={this.props} />
                <GroupReleaseDisp props={this.props} />
            </div>
        );

        return <ResponsiveDrawer pageName={"グループ編集"} data={PageSet} props={this.props}/>;
    }
}

const mapStateToProps = state => ({
    groupData: state.groupData,
    commonState: state.CommonState

});

const mapDispatchToProps = dispatch => ({
    initGroupData: d => dispatch(groupAction.initGroupData(d)),
    updateGroupName: d => dispatch(groupAction.updateGroupName(d)),
    updateCompanyName: d => dispatch(groupAction.updateCompanyName(d)),
    updateLocation: d => dispatch(groupAction.updateLocation(d)),
    updateCompanySite: d => dispatch(groupAction.updateCompanySite(d)),
    updateCompanyTel: d => dispatch(groupAction.updateCompanyTel(d)),
    updateCompanyEmail: d => dispatch(groupAction.updateCompanyEmail(d)),
    updateOtherContact: d => dispatch(groupAction.updateOtherContact(d)),
    updateCompanySupplement: d =>
        dispatch(groupAction.updateCompanySupplement(d)),
    updateCompanyRelease: d => dispatch(groupAction.updateCompanyRelease(d)),
    updateCompanyUrl: d => dispatch(groupAction.updateCompanyUrl(d)),

    UpdateProgressState: d => dispatch(CA.UpdateProgressState(d)),
    UpdateSnackbarState: d => dispatch(CA.UpdateSnackbarState(d)),
    UpdateServerResult: d => dispatch(CA.UpdateServerResult(d)),

});

export default connect(mapStateToProps, mapDispatchToProps)(GroupEdit);
