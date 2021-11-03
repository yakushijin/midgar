
export const PROFILE_DATA_SET = 'PROFILE_DATA_SET';
export const SET_ENGINEERID = 'SET_ENGINEERID';
export const SET_GROUPID = 'SET_GROUPID';
export const SET_OWNER = 'SET_OWNER';
export const SET_PUBLICNAME = 'SET_PUBLICNAME';
export const SET_BIRTHDAY = 'SET_BIRTHDAY';
export const SET_RESIDENCE = 'SET_RESIDENCE';
export const SET_SEX = 'SET_SEX';
export const SET_ENGINEEREMAIL = 'SET_ENGINEEREMAIL';
export const SET_TWITTER = 'SET_TWITTER';
export const SET_FACEBOOK = 'SET_FACEBOOK';
export const SET_GITHUB = 'SET_GITHUB';
export const SET_LINKEDIN = 'SET_LINKEDIN';
export const SET_ENGINEERSITE = 'SET_ENGINEERSITE';
export const SET_ENGINEERSUPPLEMENT = 'SET_ENGINEERSUPPLEMENT';
export const SET_ENGINEERRELEASE = 'SET_ENGINEERRELEASE';
export const SET_ENGINEERURL = 'SET_ENGINEERURL';
export const SET_ENGINEER_LIST = 'SET_ENGINEER_LIST';



export const initProfileData = (profileData) => {
    return {
        type: PROFILE_DATA_SET,
        payload: profileData
    }
}

export const updatePublicName = (publicName) => {
    return {
        type: SET_PUBLICNAME,
        payload: publicName
    }
}

export const updateBirthday = (birthday) => {
    return {
        type: SET_BIRTHDAY,
        payload: birthday
    }
}

export const updateResidence = (residence) => {
    return {
        type: SET_RESIDENCE,
        payload: residence
    }
}

export const updateSex = (sex) => {
    return {
        type: SET_SEX,
        payload: sex
    }
}

export const updateEngineerEmail = (engineerEmail) => {
    return {
        type: SET_ENGINEEREMAIL,
        payload: engineerEmail
    }
}

export const updateTwitter = (twitter) => {
    return {
        type: SET_TWITTER,
        payload: twitter
    }
}

export const updateFacebook = (facebook) => {
    return {
        type: SET_FACEBOOK,
        payload: facebook
    }
}

export const updateGithub = (github) => {
    return {
        type: SET_GITHUB,
        payload: github
    }
}

export const updateLinkedIn = (github) => {
    return {
        type: SET_LINKEDIN,
        payload: linkedIn
    }
}

export const updateEngineerSite = (engineerSite) => {
    return {
        type: SET_ENGINEERSITE,
        payload: engineerSite
    }
}

export const updateEngineerSupplement = (engineerSupplement) => {
    return {
        type: SET_ENGINEERSUPPLEMENT,
        payload: engineerSupplement
    }
}

export const updateEngineerRelease = (engineerRelease) => {
    return {
        type: SET_ENGINEERRELEASE,
        payload: engineerRelease
    }
}

export const updateEngineerUrl = (engineerUrl) => {
    return {
        type: SET_ENGINEERURL,
        payload: engineerUrl
    }
}

export const updateEngineerList = (x) => {
    return {
        type: SET_ENGINEER_LIST,
        payload: x
    }
}

