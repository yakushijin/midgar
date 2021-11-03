import * as usersAction from "../actions/UsersAction";

//ユーザデータリスト
const userDetail = {
    userName: "",
    authority: false,
    email: "",
    userList: []
};

const userDetailSet = [userDetail];

const userData = (state = userDetail, action) => {
    switch (action.type) {
        case usersAction.CLEAR_USER_STATE:
            state = Object.assign({}, userDetail);
            return state;

        case usersAction.USER_DETAIL_DATA_SET:
            return Object.assign({}, action.payload);

        case usersAction.SET_USER_NAME:
            state.userName = action.payload;
            return state;

        case usersAction.SET_USER_EMAIL:
            state.email = action.payload;
            return state;

        case usersAction.SET_AUTHORITY:
            const authorityState = Object.assign({}, userDetail);
            authorityState.authority = action.payload;
            return authorityState;

        case usersAction.SET_USER_LIST:
            const userListState = Object.assign({}, userDetail);
            userListState.userList = action.payload;
            return userListState;

        default:
            return state;
    }
};

export default userData;
