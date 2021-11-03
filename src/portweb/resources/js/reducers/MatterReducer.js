import {
    SKILL_DATA_SET,
    SKILL_NAME,
    SKILL_CATEGORY,
    SKILL_REDER,
    ADD,
    CATEGORY,
    DETAILADD
} from "../actions/MatterAction";
import * as matter from "../actions/MatterAction";

//案件詳細データ
const matterDetail = {
    matterDetailId: 0,
    matterBasicId: 0,
    engineerCategoryId: 0,
    periodProportion: 0,
    leaderFlag: false,
    techList: [],
    requirements: 0,
    basicDesign: 0,
    detailDesign: 0,
    implementation: 0,
    test: 0,
    maintenance: 0,
    matterSupplement: "",
    tech: [
        {
            id: "",
            name: ""
        }
    ],
    category: "",
    wariai: "",
    rido: ""
};

//初期化用値渡し
const matterDetailInit = Object.assign({}, matterDetail);

//案件基本データ
const matterBasic = {
    matterBasicId: 0,
    engineerId: 0,
    userId: 0,
    matterName: "",
    periodFrom: "",
    periodTo: "",
    pmFlag: false,

    // skillName: '',
    // skillCategory: '',
    // skillReder: false,
    matterDetail: [matterDetail]
};

//初期化用値渡し
const matterBasicInit = Object.assign({}, matterBasic);

const skillSet = [matterBasic];

const skill = (state = skillSet, action) => {
    switch (action.type) {
        case SKILL_DATA_SET:
            // return Object.assign({}, action.payload);

            let stateData5 = [...state];
            stateData5 = action.payload;

            return stateData5;

        case ADD:
            const skilldata3 = Object.assign({}, matterBasicInit);

            let stateData2 = [...state];
            stateData2.push(skilldata3);

            return stateData2;

        case DETAILADD:
            const skillDetail3 = Object.assign({}, matterDetailInit);

            let stateData7 = [...state];
            console.log(stateData7);
            stateData7[action.index].matterDetail.push(skillDetail3);

            return stateData7;

        case matter.BASICDELETE:
            const BasicDeleteObj = [...state];
            BasicDeleteObj.splice(action.index, 1);
            return BasicDeleteObj;

        case matter.DETAILDELETE:
            const DtailDeleteObj = [...state];
            DtailDeleteObj[action.index].matterDetail.splice(action.detailIndex, 1);
            return DtailDeleteObj;

        //案件基本
        case matter.SET_MATTER_NAME:
            let stateMatterName = [...state];
            stateMatterName[action.basicIndex].matterName = action.setData;

            return stateMatterName;

        case matter.SET_PERIOD_FROM:
            let statePeriodFrom = [...state];
            statePeriodFrom[action.basicIndex].periodFrom = action.setData;

            return statePeriodFrom;

        case matter.SET_PERIOD_TO:
            let statePerioTo = [...state];
            statePerioTo[action.basicIndex].periodTo = action.setData;

            return statePerioTo;

        case matter.SET_PM_FLAG:
            let statePmFlag = [...state];
            statePmFlag[action.basicIndex].pmFlag = action.setData;

            return statePmFlag;

        //案件詳細

        case matter.SET_ENGINEER_CATEGORY:
            let stateEngineerCategory = [...state];
            stateEngineerCategory[action.basicIndex].matterDetail[
                action.detailIndex
            ].engineerCategoryId = action.setData;

            return stateEngineerCategory;

        case matter.SET_PERIOD_PROPORTION:
            let statePeriodProportion = [...state];
            statePeriodProportion[action.basicIndex].matterDetail[
                action.detailIndex
            ].periodProportion = action.setData;

            return statePeriodProportion;

        case matter.SET_LEADER_FLAG:
            let stateLeaderFlag = [...state];
            stateLeaderFlag[action.basicIndex].matterDetail[
                action.detailIndex
            ].leaderFlag = action.setData;

            return stateLeaderFlag;

        case matter.SET_TECH:
            let tech = [...state];
            tech[action.basicIndex].matterDetail[action.detailIndex].tech =
                action.setData;

            return tech;

        case matter.SET_REQUIREMENTS:
            let stateRequirements = [...state];
            stateRequirements[action.basicIndex].matterDetail[
                action.detailIndex
            ].requirements = action.setData;

            return stateRequirements;

        case matter.SET_BASIC_DESIGN:
            let stateBasicDesign = [...state];
            stateBasicDesign[action.basicIndex].matterDetail[
                action.detailIndex
            ].basicDesign = action.setData;

            return stateBasicDesign;

        case matter.SET_DETAIL_DESIGN:
            let stateDetailDesign = [...state];
            stateDetailDesign[action.basicIndex].matterDetail[
                action.detailIndex
            ].detailDesign = action.setData;

            return stateDetailDesign;

        case matter.SET_IMPLEMENTATION:
            let stateImplementation = [...state];
            stateImplementation[action.basicIndex].matterDetail[
                action.detailIndex
            ].implementation = action.setData;

            return stateImplementation;

        case matter.SET_TEST:
            let stateTest = [...state];
            stateTest[action.basicIndex].matterDetail[action.detailIndex].test =
                action.setData;

            return stateTest;

        case matter.SET_MAINTENANCE:
            let stateMaintenance = [...state];
            stateMaintenance[action.basicIndex].matterDetail[
                action.detailIndex
            ].maintenance = action.setData;

            return stateMaintenance;

        case matter.SET_MATTER_SUPPLEMENT:
            let stateMatterSupplement = [...state];
            stateMatterSupplement[action.basicIndex].matterDetail[
                action.detailIndex
            ].matterSupplement = action.setData;

            return stateMatterSupplement;

        default:
            return state;
    }
};

export default skill;
