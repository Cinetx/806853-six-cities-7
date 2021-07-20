import React from 'react';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../../const';
import PropTypes from 'prop-types';

function PlaceName(props) {
  const {id, title} = props;

  return (
    <h2 className="place-card__name">
      <Link to={{pathname: generatePath(AppRoute.ROOM, {id})}}>{title}</Link>
    </h2>
  );
}

PlaceName.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};

export default PlaceName;
