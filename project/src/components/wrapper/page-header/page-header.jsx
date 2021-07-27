import React from 'react';
import Logo from '../../logo/logo';
import {useDispatch, useSelector} from 'react-redux';
import {AuthorizationStatus, AppRoute} from '../../../const';
import {logout} from '../../../store/api-action';
import {Link} from 'react-router-dom';
import {getAuthorizationStatus, getUser} from '../../../store/user/selectors';

function PageHeader() {
  const authorizationStatus = useSelector(getAuthorizationStatus),
    user = useSelector(getUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
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
                  <Link to={AppRoute.FAVORITES} className="header__nav-link header__nav-link--profile">
                    <div style={{backgroundImage: `url(${  user.avatarUrl  })` }} className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{user.email}</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <a onClick={handleLogout} className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul> : ''}

            {(authorizationStatus === AuthorizationStatus.NO_AUTH) ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link to={AppRoute.LOGIN} className="header__nav-link header__nav-link--profile">
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

export default PageHeader;
