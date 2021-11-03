import React from "react";

import { connect } from "react-redux";

import * as matterAction from "../actions/MatterAction";
import styled from "styled-components";

class UserInvite extends React.Component {
    //初回のみ実行する処理
    componentDidMount() {
        this.props.initSkillData(skilldata);
    }

    render() {
        return <div></div>;
    }
}

const mapStateToProps = state => ({
    skill: state.skill
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UserInvite);
