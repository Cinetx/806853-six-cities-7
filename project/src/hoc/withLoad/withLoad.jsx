import Spinner from '../../components/wrapper/spinner/spinner';
import React from 'react';
import PropTypes from 'prop-types';

const withLoad = (Component) => {
  const wrapped = ({ isDataLoaded, ...props }) => (
    (isDataLoaded && <Component {...props} />) || <Spinner/>);
  wrapped.propTypes = {
    isDataLoaded: PropTypes.bool.isRequired,
  };
  return wrapped;
};
withLoad.propTypes = {
  Component: PropTypes.element,
};

export default withLoad;
