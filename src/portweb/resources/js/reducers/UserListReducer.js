import * as usersAction from "../actions/UsersAction";

//リスト
const userList = {
    userName: '',
    authority: '',
    groupId: '',
    email: ''
}

//初期化用値渡し
const data = Object.assign({}, userList);
const dataSet = [data];

const UserListData = (state = dataSet, action) => {
    switch (action.type) {


        case usersAction.SET_USER_NAME:
            let stateData1 = [...state];
            console.log(stateData1);

            stateData1.userName = action.payload;

            return stateData1;

        case usersAction.SET_AUTHORITY:
            let stateData2 = [...state];
            stateData2.authority = action.payload;

            return stateData2;

        default:
            return state;
    }
};

export default UserListData;
