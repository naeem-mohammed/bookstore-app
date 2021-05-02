import { combineReducers } from 'redux';
import currentUser from './currentUser';
import errors from './errors';
import collection from './collection';

export default combineReducers({
  currentUser,
  errors,
  collection,
});
