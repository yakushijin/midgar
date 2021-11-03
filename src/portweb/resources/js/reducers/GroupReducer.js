import * as groupAction from '../actions/GroupAction';

//グループデータリスト
const grpup = {
    groupId: '',
    groupName: '',
    groupToken: '',
    organizationName: '',
    organizationResidence: '',
    organizationSite: '',
    organizationTel: '',
    organizationEmail: '',
    organizationContact: '',
    organizationSupplement: '',
    organizationRelease: '',
    organizationUrl: ''
}


//初期化用値渡し
const userListInit = Object.assign({}, grpup);

const grpupSet = [grpup]

const groupData = (state = grpupSet, action) => {
    switch (action.type) {
        case groupAction.GROUP_DATA_SET:
            return Object.assign({}, action.payload);

        case groupAction.SET_GROUPNAME:

            let stateData1 = state;
            console.log(stateData1)

            stateData1.groupName = action.payload;

            return stateData1;

        case groupAction.SET_COMPANYNAME:

            let stateData2 = state;
            stateData2.organizationName = action.payload;

            return stateData2;

        case groupAction.SET_LOCATION:

            let stateData3 = state;
            stateData3.organizationResidence = action.payload;

            return stateData3;

        case groupAction.SET_COMPANYSITE:

            let stateData4 = state;
            stateData4.organizationSite = action.payload;

            return stateData4;

        case groupAction.SET_COMPANYTEL:

            let stateData5 = state;
            stateData5.organizationTel = action.payload;

            return stateData5;

        case groupAction.SET_COMPANYEMAIL:

            let stateData6 = state;
            stateData6.organizationEmail = action.payload;

            return stateData6;

        case groupAction.SET_OTHERCONTACT:

            let stateData7 = state;
            stateData7.organizationContact = action.payload;

            return stateData7;

        case groupAction.SET_COMPANYSUPPLEMENT:

            let stateData8 = state;
            stateData8.organizationSupplement = action.payload;

            return stateData8;

        case groupAction.SET_COMPANYRELEASE:

            let stateData9 = state;
            stateData9.organizationRelease = action.payload;

            return stateData9;

        case groupAction.SET_COMPANYURL:

            let stateData10 = state;
            stateData10.organizationUrl = action.payload;

            return stateData10;

        default:
            return state;
    }
}

export default groupData;