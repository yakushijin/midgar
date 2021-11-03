
export const GROUP_DATA_SET = 'GROUP_DATA_SET';
export const SET_GROUPID = 'SET_GROUPID';
export const SET_GROUPNAME = 'SET_GROUPNAME';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_COMPANYNAME = 'SET_COMPANYNAME';
export const SET_LOCATION = 'SET_LOCATION';
export const SET_COMPANYSITE = 'SET_COMPANYSITE';
export const SET_COMPANYTEL = 'SET_COMPANYTEL';
export const SET_COMPANYEMAIL = 'SET_COMPANYEMAIL';
export const SET_OTHERCONTACT = 'SET_OTHERCONTACT';
export const SET_COMPANYSUPPLEMENT = 'SET_COMPANYSUPPLEMENT';
export const SET_COMPANYRELEASE = 'SET_COMPANYRELEASE';
export const SET_COMPANYURL = 'SET_COMPANYURL';



export const initGroupData = (groupData) => {
    return {
        type: GROUP_DATA_SET,
        payload: groupData
    }
}

export const updateGroupName = (groupName) => {
    return {
        type: SET_GROUPNAME,
        payload: groupName
    }
}

export const updateCompanyName = (companyName) => {
    return {
        type: SET_COMPANYNAME,
        payload: companyName
    }
}

export const updateLocation = (location) => {
    return {
        type: SET_LOCATION,
        payload: location
    }
}

export const updateCompanySite = (companySite) => {
    return {
        type: SET_COMPANYSITE,
        payload: companySite
    }
}

export const updateCompanyTel = (companyTel) => {
    return {
        type: SET_COMPANYTEL,
        payload: companyTel
    }
}

export const updateCompanyEmail = (companyEmail) => {
    return {
        type: SET_COMPANYEMAIL,
        payload: companyEmail
    }
}

export const updateOtherContact = (otherContact) => {
    return {
        type: SET_OTHERCONTACT,
        payload: otherContact
    }
}

export const updateCompanySupplement = (companySupplement) => {
    return {
        type: SET_COMPANYSUPPLEMENT,
        payload: companySupplement
    }
}

export const updateCompanyRelease = (companyRelease) => {
    return {
        type: SET_COMPANYRELEASE,
        payload: companyRelease
    }
}

export const updateCompanyUrl = (companyUrl) => {
    return {
        type: SET_COMPANYURL,
        payload: companyUrl
    }
}