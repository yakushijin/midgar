import * as techEditAction from "../actions/TechEditAction";

const techEditData = {
    techList: [],
    engineerCategoryList: [
        { engineerCategoryId: "", engineerCategoryName: "" }
    ],
    techDidpLock: false,
    techSelectDialogDisp: false,
    // currentArray: {
    //     basicIndex: 0,
    //     detailIndex: 0
    // }
    currentArray: {}
};

const techEditDataInit = Object.assign({}, techEditData);
const techEditDataSet = [techEditDataInit];

const TechListData = (state = techEditDataInit, action) => {
    switch (action.type) {
        case techEditAction.SET_TECH_LIST:
            state.techList = action.payload;
            return state;

        case techEditAction.SET_ENGINEER_CATEGORY_LIST:
            let EngineerCategoryList = Object.assign({}, state);
            EngineerCategoryList.engineerCategoryList = action.payload;

            return EngineerCategoryList;

        case techEditAction.SET_TECH_DATA:
            const techData = Object.assign({}, state);
            techData.techList[action.index] = action.payload;

            return techData;

        case techEditAction.SET_TECH_DISP_LOCK:
            const techDidpLock = Object.assign({}, state);
            techDidpLock.techDidpLock = action.payload;

            return techDidpLock;

        case techEditAction.SET_SELECT_DIALOG_DISP:
            const techSelectDialogDisp = Object.assign({}, state);
            techSelectDialogDisp.techSelectDialogDisp = action.payload;

            return techSelectDialogDisp;

        case techEditAction.SET_CURRENT_ARRAY:
            const currentArray = Object.assign({}, state);
            currentArray.currentArray = action.payload;

            return currentArray;

        default:
            return state;
    }
};

export default TechListData;
