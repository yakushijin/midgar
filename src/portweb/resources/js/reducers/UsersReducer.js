import * as usersAction from '../actions/UsersAction';

//ユーザデータリスト
const userList = {
    userName: '',
    authority: '',
    groupId: '',
    email: ''
}

//初期化用値渡し
const userListInit = Object.assign({}, userList);

const userListSet = [userList]

const userListData = (state = userListSet, action) => {
    switch (action.type) {
        case usersAction.USER_DATA_SET:

            let stateData5 = [...state];
            stateData5 = action.payload;
            console.log(stateData5)

            return stateData5;
        default:
            return state;
    }
}

export default userListData;