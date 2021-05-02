import { setCurrentUser } from '../action/user';
import { setErrors } from '../action/errors';
import { fetchData } from '../service/api';
import { setCollection } from '../action/book';

const setUserInStore = (user, dispatch) => {
  localStorage.setItem('token', JSON.stringify(user));
  dispatch(setCurrentUser({ authenticated: true, data: user }));
  dispatch(setErrors(null));
};

const setErrorInStore = (err, dispatch) => {
  dispatch(setErrors(err.response.data));
  localStorage.clear();
  dispatch(setCurrentUser({ authenticated: false, data: null }));
};

export const login = loginParams => dispatch => {
  const path = '/api/login';
  return fetchData('post', path, loginParams).then(res => {
    const { user } = res.data;
    setUserInStore(user, dispatch);
  })
    .catch(err => setErrorInStore(err, dispatch));
};

export const logout = () => dispatch => {
  localStorage.clear();
  dispatch(setCurrentUser({ authenticated: false, data: null }));
  dispatch(setCollection([]));
  return Promise.resolve();
};
