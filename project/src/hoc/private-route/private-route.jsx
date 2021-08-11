import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect, HashRouter} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppRoute, AuthorizationStatus} from '../../const';
import {getAuthorizationStatus} from '../../store/user/selectors';
import Spinner from '../../components/wrapper/spinner/spinner';

function PrivateRoute(
  {
    render,
    path,
    exact,
    status = AuthorizationStatus.AUTH,
    redirect = AppRoute.LOGIN,
  }) {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  return (
    (authorizationStatus === AuthorizationStatus.UNKNOWN) ? <Spinner/> :
      <HashRouter
        path={path}
        exact={exact}
        render={(routeProps) => (
          authorizationStatus === status
            ? render(routeProps)
            : <Redirect to={redirect}/>
        )}
      />
  );

}

PrivateRoute.propTypes = {
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  redirect: PropTypes.string,
  status: PropTypes.string,
};

export default PrivateRoute;
