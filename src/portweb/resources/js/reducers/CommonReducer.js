import * as CA from "../actions/CommonAction";

const InitData = {
    progressState: false,
    snackbarState: false,
    serverResult: {
        state: "",
        message: ""
    }
};

const CommonState = (state = InitData, action) => {
    switch (action.type) {
        case CA.SetProgressState:
            const ProgressStateObj = Object.assign({}, state);
            ProgressStateObj.progressState = action.bool;
            return ProgressStateObj;
        case CA.SetSnackbarState:
            const SnackbarStateObj = Object.assign({}, state);
            SnackbarStateObj.snackbarState = action.bool;
            return SnackbarStateObj;

        case CA.SetServerResult:
            const ServerResultObj = Object.assign({}, state);
            ServerResultObj.serverResult = action.obj;
            return ServerResultObj;
        default:
            return state;
    }
};

export default CommonState;
