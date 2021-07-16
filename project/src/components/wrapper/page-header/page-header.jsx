import React from 'react';
import Logo from '../../logo/logo';
import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../../const';
import PropTypes from 'prop-types';
import {logout} from '../../../store/api-action';
import {Link} from 'react-router-dom';

function PageHeader({authorizationStatus, userEmail, onLogout}) {

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo/>
          </div>
          <nav className="header__nav">
            {(authorizationStatus === AuthorizationStatus.AUTH) ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{userEmail}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a onClick={onLogout} className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul> : ''}

            {(authorizationStatus === AuthorizationStatus.NO_AUTH) ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul> : ''}
          </nav>
        </div>
      </div>
    </header>
  );
}

PageHeader.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  userEmail: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  userEmail: state.userEmail,
});


const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(PageHeader);
