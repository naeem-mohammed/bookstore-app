import { SET_CURRENT_USER } from './actionTypes';

/* eslint-disable import/prefer-default-export */
export const setCurrentUser = currentUser => ({
  type: SET_CURRENT_USER,
  currentUser,
});
