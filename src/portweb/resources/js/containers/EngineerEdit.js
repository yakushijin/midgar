import React from "react";

import { connect } from "react-redux";

import * as MA from "../actions/MatterAction";
import * as PA from "../actions/ProfileAction";
import * as TA from "../actions/TechEditAction";
import * as CA from "../actions/CommonAction";

import { MatterForms } from "../Forms/MatterForms";
import { ProfileForms } from "../Forms/ProfileForms";
import { ReleaseForms } from "../Forms/ReleaseForms";

import { TechSelectDialog } from "../components/Dialog";
import { ResponsiveDrawer } from "../components/Drawer";

import serverConnection from "../server/Interface";

class EngineerEdit extends React.Component {
    //初回のみ実行する処理
    componentDidMount() {
        serverConnection("engineerget", [], this.props);
    }

    render() {
        const MatterDisp = ({ props }) => {
            return <MatterForms props={props} />;
        };

        const ProfileDisp = ({ props }) => {
            return <ProfileForms props={props} />;
        };

        const ReleaseDisp = ({ props }) => {
            return <ReleaseForms props={props} />;
        };

        const PageSet = (
            <div>
                <ProfileDisp props={this.props} />
                <MatterDisp props={this.props} />
                <ReleaseDisp props={this.props} />
                <TechSelectDialog props={this.props} />
                <button onClick={()=>console.log(this.props.profileData)} />
            </div>
        );

        return <ResponsiveDrawer pageName={"エンジニア編集"} data={PageSet} props={this.props}/>;
    }
}

const mapStateToProps = state => ({
    matterData: state.matterData,
    profileData: state.profileData,
    TechListData: state.TechListData,
    commonState: state.CommonState

});

const mapDispatchToProps = dispatch => ({
    initSkillData: d => dispatch(MA.initSkillData(d)),
    updateSkillName: (d, bi) => dispatch(MA.updateSkillName(d, bi)),
    updateSkillCategory: (d, bi) => dispatch(MA.updateSkillCategory(d, bi)),
    updateSkillReder: (d, bi) => dispatch(MA.updateSkillReder(d, bi)),
    updateCategory: (d, bi, di) => dispatch(MA.updateCategory(d, bi, di)),
    addSkillDetail: ( bi) => dispatch(MA.addSkillDetail(bi)),
    addSkill: d => dispatch(MA.addSkill(d)),
    DeleteMatterDetail: (bi, di) => dispatch(MA.DeleteMatterDetail(bi, di)),
    DeleteMatterBasic: (bi) => dispatch(MA.DeleteMatterBasic(bi)),

    setMatterName: (d, bi) => dispatch(MA.setMatterName(d, bi)),
    setPeriodFrom: (d, bi) => dispatch(MA.setPeriodFrom(d, bi)),
    setPeriodTo: (d, bi) => dispatch(MA.setPeriodTo(d, bi)),
    setPmFlag: (d, bi) => dispatch(MA.setPmFlag(d, bi)),

    setEngineerCategory: (d, bi, di) =>
    dispatch(MA.setEngineerCategory(d, bi, di)),
    setPeriodProportion: (d, bi, di) =>
        dispatch(MA.setPeriodProportion(d, bi, di)),
    setLeaderFlag: (d, bi, di) => dispatch(MA.setLeaderFlag(d, bi, di)),
    setTech: (d, bi, di) => dispatch(MA.setTech(d, bi, di)),
    setRequirements: (d, bi, di) => dispatch(MA.setRequirements(d, bi, di)),
    setBasicDesign: (d, bi, di) => dispatch(MA.setBasicDesign(d, bi, di)),
    setDetailDesign: (d, bi, di) => dispatch(MA.setDetailDesign(d, bi, di)),

    setImplementation: (d, bi, di) => dispatch(MA.setImplementation(d, bi, di)),
    setTest: (d, bi, di) => dispatch(MA.setTest(d, bi, di)),
    setMaintenance: (d, bi, di) => dispatch(MA.setMaintenance(d, bi, di)),
    setMatterSupplement: (d, bi, di) =>
        dispatch(MA.setMatterSupplement(d, bi, di)),

    initProfileData: d => dispatch(PA.initProfileData(d)),
    updatePublicName: d => dispatch(PA.updatePublicName(d)),
    updateBirthday: d => dispatch(PA.updateBirthday(d)),
    updateResidence: d => dispatch(PA.updateResidence(d)),
    updateSex: d => dispatch(PA.updateSex(d)),
    updateEngineerEmail: d => dispatch(PA.updateEngineerEmail(d)),
    updateTwitter: d => dispatch(PA.updateTwitter(d)),
    updateFacebook: d => dispatch(PA.updateFacebook(d)),
    updateGithub: d => dispatch(PA.updateGithub(d)),
    updateLinkedIn: d => dispatch(PA.updateLinkedIn(d)),
    updateEngineerSite: d => dispatch(PA.updateEngineerSite(d)),
    updateEngineerSupplement: d => dispatch(PA.updateEngineerSupplement(d)),
    updateEngineerRelease: d => dispatch(PA.updateEngineerRelease(d)),
    updateEngineerUrl: d => dispatch(PA.updateEngineerUrl(d)),

    updateTechList: d => dispatch(TA.updateTechList(d)),
    updateEngineerCategoryList: d => dispatch(TA.updateEngineerCategoryList(d)),
    updateTechData: (d, bi) => dispatch(TA.updateTechData(d, bi)),
    updateTechDidpLock: d => dispatch(TA.updateTechDidpLock(d)),
    updateTechSelectDialogDisp: d => dispatch(TA.updateTechSelectDialogDisp(d)),
    updateCurrentArray: d => dispatch(TA.updateCurrentArray(d)),

    UpdateProgressState: d => dispatch(CA.UpdateProgressState(d)),
    UpdateSnackbarState: d => dispatch(CA.UpdateSnackbarState(d)),
    UpdateServerResult: d => dispatch(CA.UpdateServerResult(d)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EngineerEdit);
