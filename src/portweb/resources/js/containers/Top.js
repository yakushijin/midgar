import React from "react";

import { connect } from "react-redux";

import { ResponsiveDrawer } from "../components/Drawer";

import styled from "styled-components";

const HtmlArea = styled.div`
    margin: 10px;
    padding: 10px;
`;
class Top extends React.Component {
    componentDidMount() {}

    render() {
        const TopDisp = () => {
            return (
                <HtmlArea>
                    <h1>概要</h1>
                    <h4>
                        <a target="_blank" href="https://b.yakusys.com/2020/12/30/skill-visualization-tool/">
                            機能説明や操作方法
                        </a>
                    </h4>
                </HtmlArea>
            );
        };

        const PageSet = <TopDisp />;
        return (
            <ResponsiveDrawer
                pageName={"トップ"}
                data={PageSet}
                // props={this.props}
            />
        );
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Top);
