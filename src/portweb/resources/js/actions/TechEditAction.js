
export const SET_TECH_LIST = 'SET_TECH_LIST';
export const SET_ENGINEER_CATEGORY_LIST = 'SET_ENGINEER_CATEGORY_LIST';
export const SET_TECH_DATA = 'SET_TECH_DATA';
export const SET_SELECT_DIALOG_DISP = 'SET_SELECT_DIALOG_DISP';
export const SET_CURRENT_ARRAY = 'SET_CURRENT_ARRAY';
export const SET_TECH_DISP_LOCK = 'SET_TECH_DISP_LOCK';

export const updateTechList = (x) => {
    return {
        type: SET_TECH_LIST,
        payload: x
    }
}

export const updateEngineerCategoryList = (x) => {
    return {
        type: SET_ENGINEER_CATEGORY_LIST,
        payload: x
    }
}


export const updateTechData = (x,index) => {
    return {
        type: SET_TECH_DATA,
        payload: x,
        index: index
    }
}

export const updateTechDidpLock = (x) => {
    return {
        type: SET_TECH_DISP_LOCK,
        payload: x
    }
}

export const updateTechSelectDialogDisp = (x) => {
    return {
        type: SET_SELECT_DIALOG_DISP,
        payload: x
    }
}

export const updateCurrentArray = (x) => {
    return {
        type: SET_CURRENT_ARRAY,
        payload: x
    }
}