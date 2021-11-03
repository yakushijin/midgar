import * as profileAction from "../actions/ProfileAction";

//グループデータリスト
const profile = {
    engineerId: "",
    groupId: "",
    owner: "",
    engineerName: "",
    engineerBirthday: "",
    engineerResidence: "",
    engineerGender: "",
    engineerEmail: "",
    engineerTwitter: "",
    engineerFacebook: "",
    engineerGitHub: "",
    engineerLinkedin: "",
    engineerSite: "",
    engineerSupplement: "",
    engineerRelease: false,
    engineerUrl: "",
    techList: []
};

const profileSet = [profile];

const profileData = (state = profileSet, action) => {
    switch (action.type) {
        case profileAction.PROFILE_DATA_SET:
            return Object.assign({}, action.payload);

        case profileAction.SET_PUBLICNAME:
            state.engineerName = action.payload;
            return state;

        case profileAction.SET_BIRTHDAY:
            state.engineerBirthday = action.payload;
            return state;

        case profileAction.SET_RESIDENCE:
            const engineerResidenceState = Object.assign({}, state);
            engineerResidenceState.engineerResidence = action.payload;
            return engineerResidenceState;

        case profileAction.SET_SEX:
            const engineerGenderState = Object.assign({}, state);
            engineerGenderState.engineerGender = action.payload;
            return engineerGenderState;

        case profileAction.SET_ENGINEEREMAIL:
            state.engineerEmail = action.payload;
            return state;

        case profileAction.SET_TWITTER:
            state.engineerTwitter = action.payload;
            return state;

        case profileAction.SET_FACEBOOK:
            state.engineerFacebook = action.payload;
            return state;

        case profileAction.SET_GITHUB:
            state.engineerGitHub = action.payload;
            return state;

        case profileAction.SET_LINKEDIN:
            state.engineerLinkedin = action.payload;
            return state;

        case profileAction.SET_ENGINEERSITE:
            state.engineerSite = action.payload;
            return state;

        case profileAction.SET_ENGINEERSUPPLEMENT:
            state.engineerSupplement = action.payload;
            return state;

        // case profileAction.SET_ENGINEERRELEASE:
        //     let stateData11 = state;
        //     stateData11.engineerRelease = action.payload;

        //     return stateData11;

        case profileAction.SET_ENGINEERRELEASE:
            const EngineerReleaseState = Object.assign({}, state);
            EngineerReleaseState.engineerRelease = action.payload;
            return EngineerReleaseState;

        case profileAction.SET_ENGINEERURL:
            let stateData12 = state;
            stateData12.engineerUrl = action.payload;

            return stateData12;

        default:
            return state;
    }
};

export default profileData;
