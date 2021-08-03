import {combineReducers} from 'redux';
import {sort} from './sort/sort';
import {loadedData} from './data-loaded/loaded-data';
import {user} from './user/user';
import {sentData} from './data-send/sent-data';

export const NameSpace = {
  LOADED_DATA: 'LOADED_DATA',
  SENT_DATA: 'SENT_DATA',
  USER: 'USER',
  SORT: 'SORT',
};

export default combineReducers({
  [NameSpace.LOADED_DATA]: loadedData,
  [NameSpace.SENT_DATA]: sentData,
  [NameSpace.USER]: user,
  [NameSpace.SORT]: sort,
});
