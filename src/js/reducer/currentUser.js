import { SET_CURRENT_USER } from '../action/actionTypes';

const initialState = {
  authenticated: false,
  data: null,
};

export default (state = initialState, action) => {
  if (action.type === SET_CURRENT_USER) {
    return action.currentUser;
  }
  return state;
};
