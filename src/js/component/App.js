import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router, Switch } from 'react-router-dom';
import history from '../common/history';
import withAuth from '../hoc/withAuth';
import '../../scss/main.scss';
import configureStore from '../store/configureStore';
import { setCurrentUser } from '../action/user';
import LoginPage from './LoginPage';
import Header from './Header';
import UserDashboard from './UserDashboard';

const store = configureStore();

if (localStorage.token) {
  const userData = JSON.parse(localStorage.token);
  try {
    store.dispatch(setCurrentUser({ authenticated: true, data: userData }));
  } catch (err) {
    store.dispatch(setCurrentUser({ authenticated: false, data: null }));
    localStorage.clear();
  }
}

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/login" component={withAuth(LoginPage, true)} />
          <Route path="/" component={withAuth(UserDashboard)} exact />
        </Switch>
      </div>
    </Router>
  </Provider>
);

export default App;
