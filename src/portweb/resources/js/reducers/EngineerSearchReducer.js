import * as profileAction from "../actions/ProfileAction";
import * as commonAction from "../actions/CommonAction";

//リスト
const dataSource = {
    engineerId: "",
    groupId: "",
    owner: "",
    publicName: "",
    birthday: "",
    residence: "",
    sex: "",
    engineerEmail: "",
    twitter: "",
    facebook: "",
    github: "",
    engineerSite: "",
    engineerSupplement: "",
    engineerRelease: "",
    engineerUrl: ""
};

//初期化用値渡し
const data = Object.assign({}, dataSource);
const dataSet = [data];

const EngineerSearchData = (state = dataSet, action) => {
    switch (action.type) {
        case commonAction.StateClear:
            state = Object.assign({}, dataSource);
            return state;

        // case commonAction.StateClear:
        //     return dataSet;

        case profileAction.SET_PUBLICNAME:
            let stateData1 = state;
            console.log(stateData1);

            stateData1.publicName = action.payload;

            return stateData1;

        case profileAction.SET_BIRTHDAY:
            let stateData2 = state;
            stateData2.birthday = action.payload;

            return stateData2;

        case profileAction.SET_RESIDENCE:
            let stateData3 = state;
            stateData3.residence = action.payload;

            return stateData3;

        case profileAction.SET_SEX:
            let stateData4 = state;
            stateData4.sex = action.payload;

            return stateData4;

        case profileAction.SET_ENGINEEREMAIL:
            let stateData5 = state;
            stateData5.engineerEmail = action.payload;

            return stateData5;

        case profileAction.SET_TWITTER:
            let stateData6 = state;
            stateData6.twitter = action.payload;

            return stateData6;

        case profileAction.SET_FACEBOOK:
            let stateData7 = state;
            stateData7.facebook = action.payload;

            return stateData7;

        case profileAction.SET_GITHUB:
            let stateData8 = state;
            stateData8.github = action.payload;

            return stateData8;

        case profileAction.SET_ENGINEERSITE:
            let stateData9 = state;
            stateData9.engineerSite = action.payload;

            return stateData9;

        case profileAction.SET_ENGINEERSUPPLEMENT:
            let stateData10 = state;
            stateData10.engineerSupplement = action.payload;

            return stateData10;

        case profileAction.SET_ENGINEERRELEASE:
            let stateData11 = state;
            stateData11.engineerRelease = action.payload;

            return stateData11;

        case profileAction.SET_ENGINEERURL:
            let stateData12 = state;
            stateData12.engineerUrl = action.payload;

            return stateData12;

        case profileAction.SET_ENGINEER_LIST:
            const engineerListState = Object.assign({}, dataSource);
            engineerListState.engineerList = action.payload;
            return engineerListState;

        default:
            return state;
    }
};

export default EngineerSearchData;
