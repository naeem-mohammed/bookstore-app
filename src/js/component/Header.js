/* eslint-disable no-shadow */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import { logout } from '../thunks/user';
import history from '../common/history';

const Header = ({ logout, currentUser }) => {
  const handleLogOut = () => {
    NProgress.start();
    logout()
      .then(() => NProgress.done());
  };
  return (
    <header className="panel-bg">
      <h1 className="bookstore-cms">
        <Link to="/">Bookstore App</Link>
      </h1>
      <div className="user-wrapper">
        <button
          type="button"
          className="logout-btn"
          onClick={currentUser.authenticated ? handleLogOut : () => history.push('/login')}>
          {currentUser.authenticated ? 'Log Out' : 'Log In'}
        </button>
      </div>
    </header>
  );
};

Header.propTypes = {
  logout: PropTypes.func.isRequired,
  currentUser: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});

export default connect(mapStateToProps, { logout })(Header);
