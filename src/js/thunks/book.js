/* eslint-disable import/prefer-default-export */
import {
  setCollection,
} from '../action/book';
import { fetchData } from '../service/api';

export const fetchCollection = username => dispatch => {
  const path = `/api/books/${username}/collection`;

  return fetchData('get', path)
    .then(res => res.data.items.map(item => item.volumeInfo))
    .then(res => {
      dispatch(setCollection(res));
    });
};
