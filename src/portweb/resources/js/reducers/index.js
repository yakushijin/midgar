import { combineReducers } from 'redux';
import matterData from './MatterReducer';
import userListData from './UserListReducer';
import userData from './UserReducer';
import groupData from './GroupReducer';
import profileData from './ProfileReducer';
import TechListData from './TechEditReducer';
import EngineerSearchData from './EngineerSearchReducer';
import CommonState from './CommonReducer';

const reducer = combineReducers({
  matterData,
  userData,
  userListData,
  groupData,
  profileData,
  TechListData,
  EngineerSearchData,
  CommonState,
});

export default reducer;