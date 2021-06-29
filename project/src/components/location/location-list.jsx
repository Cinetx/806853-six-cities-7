import React from 'react';
import LocationItem from './location-item';
import PropTypes from 'prop-types';
import cityPropsType from '../../prop-types/city';

function LocationList(props) {
  const {cityList, activeCity, cityChange} = props;

  return (
    <ul className="locations__list tabs__list">
      {cityList.map((city)=> (<LocationItem cityChange={cityChange} activeCity={activeCity} city={city} key={city.name}/>),
      )}
    </ul>
  );
}

LocationList.propTypes = {
  cityList: PropTypes.arrayOf(cityPropsType).isRequired,
  activeCity: cityPropsType,
  cityChange: PropTypes.func.isRequired,
};

export default LocationList;
