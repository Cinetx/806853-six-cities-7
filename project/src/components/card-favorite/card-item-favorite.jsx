import React from 'react';
import CardFavorite from './card-favorite';
import offerPropsType from '../../prop-types/offer';
import PropTypes from 'prop-types';

function CardItemFavorite(props) {
  const { city, offers } = props;

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((offer) => {
          if (city.toLowerCase() === offer.city.name.toLowerCase()) {
            return (<CardFavorite offer={offer}/>);
          }
        })}
      </div>
    </li>
  );
}

CardItemFavorite.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
  // offer: offerPropsType,
};

export default CardItemFavorite;
