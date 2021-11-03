import React from "react";

import { connect } from "react-redux";

import { updateSkillName } from "../actions/MatterAction";
import { DetailAddIcon } from "../components/Icon";
import Divider from "@material-ui/core/Divider";
import { COMMONBOX } from "../components/CommonBox";

import {
    MatterTextForm,
    SkillAreaTextForm,
    CalendarMonthTextForm
} from "../components/TextBox";
import { CheckForm } from "../components/CheckBox";
import {
    SkillAreaSelectForm,
    PercentageSelect,
    EngineerCategorySelectList,
    EngineerCategorySelectForm
} from "../components/SelectBox";
import { TechEdit } from "../components/Icon";
import { DefaultButton, UpdateButton,DeleteButton } from "../components/Button";
import { DetailDeleteIcon } from "../components/Icon";
import { DomCenter } from "../components/UtilityStyle";

import styled from "styled-components";

import {
    FirstHeader,
    FirstHeaderLine,
    HeaderButtonArea,
    HeaderArea
} from "../components/Header";

import { numBoolConvert } from "../Utility";
import serverConnection from "../server/Interface";

const MatterArea = styled.div`
    display: inline-block;
    margin-top: 4px;
    width: 100%;
`;

const MatterSetDataArea = styled.div`
    background: #eef;
    margin: 10px 4px;
    border-radius: 4px;
`;

const MatterAddButtonArea = styled.div`
    margin:10px;
`;

const MatterDeleteArea = styled.div`
    float: right;
`;

const SkillDetailArea = styled.div`
    background: #dde;
    overflow: auto;
    border-radius: 4px;
    margin: 0 6px 4px 10px;
`;

const SkillHeaderArea = styled.div`
    /* background: #dfd; */
    /* overflow: auto; */
    font-weight: bold;
    color: #000027;
    /* text-align: center; */
    margin-top:2px;
    padding: 2px;
    font-size: 16px;
`;

const SKILLAREA = styled.div`
    /* background: #efe; */
    /* overflow: auto; */
`;

const MatterGroupArea = styled.div`
    margin: 5px;
`;

const MATTERSKILLAREA = styled.div`
    width: 100%;
    display: inline-block;
`;
const DETAILSKILLAREA = styled.div`
    display: flex;
    padding: 0 4px;
    /* background: #fff; */
    /* overflow: scroll; */
    width: 1500px;
    margin: auto;
`;

const PeriodFormSet = styled.div`
    display: inline-block;
`;

const DetailSkilAddButtonBlock = styled.div`
    width: 20px;
    margin:0 4px;
`;

const DetailSkillPercentageBlock = styled.div`
    width: 80px;
    margin:0 4px;
`;
const DetailSkillPercentageSelectWidth = 72

const DetailSkilCheckBoxBlock = styled.div`
    width: 36px;
    margin:0 4px;
`;

const DetailSkillCategoryBlock = styled.div`
    width: 234px;
    margin:0 4px;
`;

const DetailSkillTechBlock = styled.div`
    width: 360px;
    margin:0 4px;
`;

const DetailSkillTechArea = styled.div`
    margin: 6px 2px 0 2px;
    width: 800px;
`;
const DetailSkillTechUnit = styled.div`
    display: inline-block;
    margin: 0 4px;
    font-size: 18px;
`;

const ProfileUnit = styled.div`
    /* text-align: center; */
    /* margin: 2px 0; */
    padding: 4px 0 0 20px;
    display: inline-block;
`;

const ProfileUnitDate = styled.div`
    text-align: center;
    margin: 2px 0;
    padding: 4px 0 0 4px;
    display: inline-block;
    @media screen and (max-width: 400px) {
        padding: 4px 0 0 20px;
    }
`;

const SupplementUnit = styled.div`
    display: inline-block;
    width: 280px;
`;

const DeleteButtonUnit = styled.div`
    display: inline-block;
    margin: 8px;
`;

const MatterDetailDeleteButtonArea = styled.div`
    display: inline-block;
    margin: 4px;
    width: 80px;
`;

const MatterDetailDeleteButtonUnit = styled.div`
    text-align: right;
`;

// const SkillHeaderArea = styled.div`
//     background: "efe";
// `;

export const MatterForms = ({ props }) => {
    let foos = [];
    foos.push(
        <div>
            <HeaderArea>
                <FirstHeader>実績情報</FirstHeader>
                <HeaderButtonArea>
                    <UpdateButton
                        name={"更新"}
                        onClick={() =>
                            serverConnection(
                                "engineermatteredit",
                                props.matterData,
                                props
                            )
                        }
                    ></UpdateButton>
                </HeaderButtonArea>
            </HeaderArea>
            <FirstHeaderLine />
        </div>
    );
    props.matterData.forEach(function(element, basicIndex) {
        let matterSet = [];
        var key = basicIndex;
        matterSet.push(
            <MatterArea key={key}>
                <SkillForms
                    value={element}
                    props={props}
                    basicIndex={basicIndex}
                />
            </MatterArea>
        );

        // inner.push(<SkillHeaderArea><DetailSkillHeader /></SkillHeaderArea>);
        let inner = [];

        // <Divider />
        element.matterDetail.forEach(function(detailElement, detailIndex) {
            var detailKey = basicIndex + "_" + detailIndex;
            inner.push(
                <SKILLAREA key={detailKey}>
                    <DetailSkillForms
                        detailValue={detailElement}
                        props={props}
                        basicIndex={basicIndex}
                        detailIndex={detailIndex}
                    />
                </SKILLAREA>
            );
        });

        matterSet.push(
            <SkillDetailArea>
                <SkillHeaderArea>
                    <DetailSkillHeader props={props} basicIndex={basicIndex} />
                </SkillHeaderArea>
                {inner}
            </SkillDetailArea>
        );

        matterSet.push(<Divider />);

        foos.push(<MatterSetDataArea>{matterSet}</MatterSetDataArea>);
    });

    return (
        <COMMONBOX>
            <MatterGroupArea>{foos}</MatterGroupArea>
            <MatterAddButtonArea>
            <DefaultButton
                onClick={() => props.addSkill(props.matterData)}
                name={"案件追加"}
            ></DefaultButton>
            </MatterAddButtonArea>
        </COMMONBOX>
    );
};

const SkillForms = ({ props, value, basicIndex }) => (
    <MATTERSKILLAREA>
        <ProfileUnit>
            <MatterTextForm
                name={"案件名"}
                value={value.matterName}
                onChange={e => props.setMatterName(e.target.value, basicIndex)}
            />
        </ProfileUnit>
        <PeriodFormSet>
            <ProfileUnit>
                <CalendarMonthTextForm
                    name={"期間"}
                    value={value.periodFrom}
                    onChange={e =>
                        props.setPeriodFrom(e.target.value, basicIndex)
                    }
                />
            </ProfileUnit>
            <ProfileUnitDate>
                <CalendarMonthTextForm
                    name={"〜"}
                    value={value.periodTo}
                    onChange={e =>
                        props.setPeriodTo(e.target.value, basicIndex)
                    }
                />
            </ProfileUnitDate>
        </PeriodFormSet>
        <ProfileUnit>
            <CheckForm
                name={"PM"}
                value={numBoolConvert(value.pmFlag)}
                onChange={e => props.setPmFlag(e.target.checked, basicIndex)}
            />
        </ProfileUnit>
        <MatterDeleteArea>
            <DeleteButtonUnit>
                <DeleteButton
                    name={"案件削除"}
                    onClick={() => props.DeleteMatterBasic(basicIndex)}
                />
            </DeleteButtonUnit>
        </MatterDeleteArea>
    </MATTERSKILLAREA>
);

export const DetailSkillHeader = ({ props, basicIndex }) => (
    <div>
        <DETAILSKILLAREA>
            <DetailSkilAddButtonBlock>
                <DetailAddIcon
                    onClick={() => props.addSkillDetail(basicIndex)}
                ></DetailAddIcon>
            </DetailSkilAddButtonBlock>
            <DetailSkillCategoryBlock>カテゴリ</DetailSkillCategoryBlock>
            <DetailSkillPercentageBlock>稼働割合</DetailSkillPercentageBlock>
            <DetailSkilCheckBoxBlock>TL</DetailSkilCheckBoxBlock>
            <DetailSkillTechBlock>使用技術</DetailSkillTechBlock>
            <DetailSkillPercentageBlock>要件定義</DetailSkillPercentageBlock>
            <DetailSkillPercentageBlock>基本設計</DetailSkillPercentageBlock>
            <DetailSkillPercentageBlock>詳細設計</DetailSkillPercentageBlock>
            <DetailSkillPercentageBlock>実装</DetailSkillPercentageBlock>
            <DetailSkillPercentageBlock>テスト</DetailSkillPercentageBlock>
            <DetailSkillPercentageBlock>保守</DetailSkillPercentageBlock>
            <SupplementUnit>補足</SupplementUnit>
            <MatterDetailDeleteButtonArea></MatterDetailDeleteButtonArea>
        </DETAILSKILLAREA>
    </div>
);

const DetailSkillForms = ({ props, detailValue, basicIndex, detailIndex }) => (
    <DETAILSKILLAREA>
        <DetailSkilAddButtonBlock></DetailSkilAddButtonBlock>

        <DetailSkillCategoryBlock>
            {/* カテゴリ */}
            {/* <EngineerCategorySelectForm  value={props.periodProportion} selectData={EngineerCategorySelectList} onChange={e => prop.setPeriodProportion(e.target.value, basicIndex, detailIndex)} /> */}
            <EngineerCategorySelectForm
                value={detailValue.engineerCategoryId}
                selectData={props.TechListData.engineerCategoryList}
                onChange={e =>
                    props.setEngineerCategory(
                        e.target.value,
                        basicIndex,
                        detailIndex
                    )
                }
            />
        </DetailSkillCategoryBlock>

        <DetailSkillPercentageBlock>
            {/* 期間内稼働割合 */}
            <SkillAreaSelectForm
                value={detailValue.periodProportion}
                selectData={PercentageSelect}
                onChange={e =>
                    props.setPeriodProportion(
                        e.target.value,
                        basicIndex,
                        detailIndex
                    )
                }
                width={DetailSkillPercentageSelectWidth }
            />
        </DetailSkillPercentageBlock>
        <DetailSkilCheckBoxBlock>
            {/* リーダー */}
            <CheckForm
                value={numBoolConvert(detailValue.leaderFlag)}
                onChange={e =>
                    props.setLeaderFlag(
                        e.target.checked,
                        basicIndex,
                        detailIndex
                    )
                }
            />
        </DetailSkilCheckBoxBlock>
        <DetailSkillTechArea>
            <TechEdit
                onClick={() => TechEditOpen(props, basicIndex, detailIndex)}
            />
            {detailValue.tech.map((value, index) => (
                <DetailSkillTechUnit key={value.techId}>
                    {value.techName}
                </DetailSkillTechUnit>
            ))}
        </DetailSkillTechArea>
        <DetailSkillPercentageBlock>
            {/* 要件定義 */}
            <SkillAreaSelectForm
                value={detailValue.requirements}
                selectData={PercentageSelect}
                onChange={e =>
                    props.setRequirements(
                        e.target.value,
                        basicIndex,
                        detailIndex
                    )
                }
                width={DetailSkillPercentageSelectWidth }
            />
        </DetailSkillPercentageBlock>
        <DetailSkillPercentageBlock>
            {/* 基本設計 */}
            <SkillAreaSelectForm
                value={detailValue.basicDesign}
                selectData={PercentageSelect}
                onChange={e =>
                    props.setBasicDesign(
                        e.target.value,
                        basicIndex,
                        detailIndex
                    )
                }
                width={DetailSkillPercentageSelectWidth }
            />
        </DetailSkillPercentageBlock>
        <DetailSkillPercentageBlock>
            {/* 詳細設計 */}
            <SkillAreaSelectForm
                value={detailValue.detailDesign}
                selectData={PercentageSelect}
                onChange={e =>
                    props.setDetailDesign(
                        e.target.value,
                        basicIndex,
                        detailIndex
                    )
                }
                width={DetailSkillPercentageSelectWidth }
            />
        </DetailSkillPercentageBlock>
        <DetailSkillPercentageBlock>
            {/* 実装 */}
            <SkillAreaSelectForm
                value={detailValue.implementation}
                selectData={PercentageSelect}
                onChange={e =>
                    props.setImplementation(
                        e.target.value,
                        basicIndex,
                        detailIndex
                    )
                }
                width={DetailSkillPercentageSelectWidth }
            />
        </DetailSkillPercentageBlock>
        <DetailSkillPercentageBlock>
            {/* テスト */}
            <SkillAreaSelectForm
                value={detailValue.test}
                selectData={PercentageSelect}
                onChange={e =>
                    props.setTest(e.target.value, basicIndex, detailIndex)
                }
                width={DetailSkillPercentageSelectWidth }
            />
        </DetailSkillPercentageBlock>
        <DetailSkillPercentageBlock>
            {/* 保守 */}
            <SkillAreaSelectForm
                value={detailValue.maintenance}
                selectData={PercentageSelect}
                onChange={e =>
                    props.setMaintenance(
                        e.target.value,
                        basicIndex,
                        detailIndex
                    )
                }
                width={DetailSkillPercentageSelectWidth }
            />
        </DetailSkillPercentageBlock>
        {/* 補足 */}
        <SupplementUnit>
            <SkillAreaTextForm
                value={detailValue.matterSupplement}
                selectData={PercentageSelect}
                onChange={e =>
                    props.setMatterSupplement(
                        e.target.value,
                        basicIndex,
                        detailIndex
                    )
                }
            />
        </SupplementUnit>
        <MatterDetailDeleteButtonArea>
            <MatterDetailDeleteButtonUnit>
                <DetailDeleteIcon
                    onClick={() =>
                        props.DeleteMatterDetail(basicIndex, detailIndex)
                    }
                />
            </MatterDetailDeleteButtonUnit>
        </MatterDetailDeleteButtonArea>
    </DETAILSKILLAREA>
);

const TechEditOpen = (props, basicIndex, detailIndex) => {
    props.updateTechSelectDialogDisp(true);
    props.updateCurrentArray({
        basicIndex: basicIndex,
        detailIndex: detailIndex
    });
};
