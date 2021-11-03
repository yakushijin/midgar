export const SKILL_NAME = 'SKILL_NAME';
export const SKILL_CATEGORY = 'SKILL_CATEGORY ';
export const SKILL_REDER = 'SKILL_REDER';

export const SKILL_DATA_SET = 'SKILL_DATA_SET';

export const CATEGORY = 'CATEGORY';
export const DETAILADD = 'DETAILADD';

export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const BASICDELETE = 'BASICDELETE';
export const DETAILDELETE = 'DETAILDELETE';

//案件基本
export const SET_MATTER_NAME = 'SET_MATTER_NAME';
export const SET_PERIOD_FROM = 'SET_PERIOD_FROM';
export const SET_PERIOD_TO = 'SET_PERIOD_TO';
export const SET_PM_FLAG = 'SET_PM_FLAG';

//案件詳細
export const SET_ENGINEER_CATEGORY = 'SET_ENGINEER_CATEGORY';
export const SET_PERIOD_PROPORTION = 'SET_PERIOD_PROPORTION';
export const SET_LEADER_FLAG = 'SET_LEADER_FLAG';
export const SET_TECH = 'SET_TECH';
export const SET_REQUIREMENTS = 'SET_REQUIREMENTS';
export const SET_BASIC_DESIGN = 'SET_BASIC_DESIGN';
export const SET_DETAIL_DESIGN = 'SET_DETAIL_DESIGN';
export const SET_IMPLEMENTATION = 'SET_IMPLEMENTATION';
export const SET_TEST = 'SET_TEST';
export const SET_MAINTENANCE = 'SET_MAINTENANCE';
export const SET_MATTER_SUPPLEMENT = 'SET_MATTER_SUPPLEMENT';
export const SET_ENGINEER_CATEGORYID = 'SET_ENGINEER_CATEGORYID';


export const initSkillData = (skillData) => {
    return {
        type: SKILL_DATA_SET,
        payload: skillData
    }
}

export const updateSkillName = (skillName,index) => {
    return {
        type: SKILL_NAME,
        payload: skillName,
        index:index
    }
}

export const updateSkillCategory = (skillCategory,index) => {
    return {
        type: SKILL_CATEGORY,
        payload: skillCategory,
        index:index
    }
}

export const updateSkillReder = (skillReder,index) => {
    return {
        type: SKILL_REDER,
        payload: skillReder,
        index:index
    }
}

export const updateCategory = (ctegory,index,detailIndex) => {
    return {
        type: CATEGORY,
        payload: ctegory,
        index:index,
        detailIndex:detailIndex
    }
}

export const addSkill = skillSet => {
    return {
        type: ADD,
        skillSet: skillSet

    }
}

export const addSkillDetail = (index) => {
    return {
        type: DETAILADD,
        index: index,
    }
}

export const deleteSkill = () => {
    return {
        type: DELETE
    }
}


export const DeleteMatterDetail = (index,detailIndex) => {
    return {
        type: DETAILDELETE,
        index: index,
        detailIndex: detailIndex
    }
}

export const DeleteMatterBasic = (index) => {
    return {
        type: BASICDELETE,
        index: index
    }
}

//案件基本
export const setMatterName = (setData,basicIndex) => {
    return {
        type: SET_MATTER_NAME,
        setData: setData,
        basicIndex:basicIndex
    }
}

export const setPeriodFrom = (setData,basicIndex) => {
    return {
        type: SET_PERIOD_FROM,
        setData: setData,
        basicIndex:basicIndex
    }
}

export const setPeriodTo = (setData,basicIndex) => {
    return {
        type: SET_PERIOD_TO,
        setData: setData,
        basicIndex:basicIndex
    }
}

export const setPmFlag = (setData,basicIndex) => {
    return {
        type: SET_PM_FLAG,
        setData: setData,
        basicIndex:basicIndex
    }
}


//案件詳細
export const setEngineerCategory = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_ENGINEER_CATEGORY,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}


export const setPeriodProportion = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_PERIOD_PROPORTION,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setLeaderFlag = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_LEADER_FLAG,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setTech = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_TECH,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setRequirements = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_REQUIREMENTS,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setBasicDesign = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_BASIC_DESIGN,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setDetailDesign = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_DETAIL_DESIGN,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setImplementation = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_IMPLEMENTATION,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setTest = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_TEST,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setMaintenance = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_MAINTENANCE,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setMatterSupplement = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_MATTER_SUPPLEMENT,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}

export const setEngineerCategoryid = (setData,basicIndex,detailIndex) => {
    return {
        type: SET_ENGINEER_CATEGORYID,
        setData: setData,
        basicIndex:basicIndex,
        detailIndex:detailIndex
    }
}
