/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import mockBooks from '../mock/books';

const adminUserCredentials = {
  username: 'admin',
  password: 'password',
};

const adminUserObject = {
  user: {
    is_admin: true,
    username: 'admin',
  },
};

const axiosInstance = axios;
const mock = new MockAdapter(axiosInstance);

export const fetchData = async (method, path, data) => {
  const result = await axiosInstance[method](path, data);
  return result;
};

mock.onPost('/api/login', adminUserCredentials).reply(200, adminUserObject);

mock.onPost('/api/login').reply(400, { message: 'Incorrect username/password. Please try again' });

mock.onGet('/api/books/admin/collection').reply(200, mockBooks);
