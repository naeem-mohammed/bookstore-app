/* eslint-disable import/prefer-default-export */
import {
  SET_COLLECTION,
} from './actionTypes';

export const setCollection = collection => ({
  type: SET_COLLECTION,
  collection,
});
