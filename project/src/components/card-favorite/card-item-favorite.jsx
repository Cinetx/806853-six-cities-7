import React from 'react';
import CardFavoritePlaceList from './card-favorite-place-list';
import offerPropsType from '../../prop-types/offer';
import PropTypes from 'prop-types';

function CardItemFavorite(props) {
  const {city, offers} = props;
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <CardFavoritePlaceList offers={offers} />
    </li>
  );
}

CardItemFavorite.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
};

export default CardItemFavorite;
