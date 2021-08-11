import React from 'react';
import { Link } from 'react-router-dom';
import SiteLogo from './img/logo.svg'

function Logo() {
  return (
    <Link className="header__logo-link header__logo-link--active" to="/">
      <img className="header__logo" src={SiteLogo} alt="6 cities logo" width="81" height="41" />
    </Link>
  );
}

export default Logo;
