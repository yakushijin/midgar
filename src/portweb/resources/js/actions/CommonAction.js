export const StateClear = 'StateClear';
export const SetSnackbarState = 'SetSnackbarState';
export const SetProgressState = 'SetProgressState';
export const SetServerResult = 'SetServerResult';

export const StateClearAction = () => {
    return {
        type: StateClear
    }
}

export const UpdateProgressState = (bool) => {
    return {
        type: SetProgressState,
        bool:bool
    }
}

export const UpdateSnackbarState = (bool) => {
    return {
        type: SetSnackbarState,
        bool:bool
    }
}


export const UpdateServerResult = (obj) => {
    return {
        type: SetServerResult,
        obj:obj
    }
}
