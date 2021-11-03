
export const CLEAR_USER_STATE = 'CLEAR_USER_STATE';
export const USER_DATA_SET = 'USER_DATA_SET';
export const USER_DETAIL_DATA_SET = 'USER_DETAIL_DATA_SET';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_AUTHORITY = 'SET_AUTHORITY';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_LIST = 'SET_USER_LIST';

export const clearUserState = () => {
    return {
        type: CLEAR_USER_STATE
    }
}


export const initUserData = (userData) => {
    return {
        type: USER_DATA_SET,
        payload: userData
    }
}

export const initUserDetailData = (userDetailData) => {
    return {
        type: USER_DETAIL_DATA_SET,
        payload: userDetailData
    }
}

export const updateUserName = (userName) => {
    return {
        type: SET_USER_NAME,
        payload: userName
    }
}

export const updateUserEmail = (x) => {
    return {
        type: SET_USER_EMAIL,
        payload: x
    }
}

export const updateAuthority = (authority) => {
    return {
        type: SET_AUTHORITY,
        payload: authority
    }
}

export const updateUserList = (x) => {
    return {
        type: SET_USER_LIST,
        payload: x
    }
}
