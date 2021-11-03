import React from "react";

import { connect } from "react-redux";

import * as PA from "../actions/ProfileAction";
import * as CA from "../actions/CommonAction";

import { ResponsiveDrawer } from "../components/Drawer";

import { EngineerSearchForm } from "../Forms/EngineerSearchForm";
import { SearchResultForm } from "../Grids/SearchResultForm";

class EngineerList extends React.Component {
    //初回のみ実行する処理
    componentDidMount() {
        this.props.StateClearAction();
    }

    render() {
        const PageSet = (
            <div>
                <EngineerSearchForm
                    props={this.props.EngineerSearchData}
                    prop={this.props}
                />
                <SearchResultForm
                    EngineerSearchData={this.props.EngineerSearchData}
                />
            </div>
        );

        return <ResponsiveDrawer pageName={"エンジニア一覧"} data={PageSet} props={this.props}/>;
    }
}

const mapStateToProps = state => ({
    EngineerSearchData: state.EngineerSearchData,
    commonState: state.CommonState

});

const mapDispatchToProps = dispatch => ({
    StateClearAction: () => dispatch(CA.StateClearAction()),

    updatePublicName: d => dispatch(PA.updatePublicName(d)),
    updateBirthday: d => dispatch(PA.updateBirthday(d)),
    updateResidence: d => dispatch(PA.updateResidence(d)),
    updateSex: d => dispatch(PA.updateSex(d)),
    updateEngineerEmail: d => dispatch(PA.updateEngineerEmail(d)),
    updateTwitter: d => dispatch(PA.updateTwitter(d)),
    updateFacebook: d => dispatch(PA.updateFacebook(d)),
    updateGithub: d => dispatch(PA.updateGithub(d)),
    updateEngineerSite: d => dispatch(PA.updateEngineerSite(d)),
    updateEngineerSupplement: d => dispatch(PA.updateEngineerSupplement(d)),
    updateEngineerRelease: d => dispatch(PA.updateEngineerRelease(d)),
    updateEngineerUrl: d => dispatch(PA.updateEngineerUrl(d)),
    updateEngineerList: d => dispatch(PA.updateEngineerList(d)),

    UpdateProgressState: d => dispatch(CA.UpdateProgressState(d)),
    UpdateSnackbarState: d => dispatch(CA.UpdateSnackbarState(d)),
    UpdateServerResult: d => dispatch(CA.UpdateServerResult(d)),

});

export default connect(mapStateToProps, mapDispatchToProps)(EngineerList);
