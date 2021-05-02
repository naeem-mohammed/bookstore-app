import {
  SET_COLLECTION,
} from '../action/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case SET_COLLECTION:
      return action.collection;
    default:
      return state;
  }
};
