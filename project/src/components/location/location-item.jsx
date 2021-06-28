import React from 'react';
import PropTypes from 'prop-types';
import cityPropsType from '../../prop-types/city';

function LocationItem(props) {
  const {city, activeCity, cityChange} = props;
  const cityClassName = 'locations__item-link tabs__item';

  const cityActiveClassName = 'locations__item-link tabs__item tabs__item--active';

  return (
    <li className="locations__item">
      <a onClick={(evt) => {
        evt.preventDefault();
        cityChange(city);
      }} className={(city.toLowerCase() === activeCity.name.toLowerCase()) ? cityActiveClassName : cityClassName} href="#"
      >
        <span>{city}</span>
      </a>
    </li>
  );
}

LocationItem.propTypes = {
  city: PropTypes.string.isRequired,
  activeCity: cityPropsType,
  cityChange: PropTypes.func.isRequired,
};

export default LocationItem;
