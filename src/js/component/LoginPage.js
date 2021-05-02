/* eslint-disable no-shadow */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { login } from '../thunks/user';
import InputWrapper from './InputWrapper';

export const LoginPage = ({
  login,
  errors,
  history,
}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(errors ? errors.message : errors);

  const loginUser = e => {
    e.preventDefault();
    NProgress.start();
    setUsername('');
    setPassword('');
    login({ username, password })
      .then(() => {
        history.push('/');
      })
      .then(() => NProgress.done())
      .catch(() => setErrorMessage(errors));
  };

  return (
    <div>
      <div className="form-wrapper">
        <form className="form user-form">
          {errors && <div className="error">{errorMessage}</div>}
          <InputWrapper
            inputValue={username}
            labelValue="Username:"
            setInput={setUsername}
            type="text"
            inputId="email" />
          <InputWrapper
            inputValue={password}
            labelValue="Password:"
            setInput={setPassword}
            type="password"
            inputId="password" />
          <div className="btn-wrapper" style={{ textAlign: 'center' }}>
            <button
              type="submit"
              className="user-form__btn"
              onClick={loginUser}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  errors: state.errors,
});

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  errors: PropTypes.instanceOf(Object),
  history: PropTypes.instanceOf(Object).isRequired,
};

LoginPage.defaultProps = {
  errors: null,
};

export default connect(
  mapStateToProps,
  { login },
)(LoginPage);
