import React from 'react';
import CardItemFavorite from './card-item-favorite';
import PropTypes from 'prop-types';
import offerPropsType from '../../prop-types/offer';


function CardListFavorite(props) {
  const {offers} = props;
  const uniqueCity = [...new Set(offers.map((item) => item.city.name))];

  const filterOffers = (city, offersArray) => {
    const filtredOffer = [];

    offersArray.filter((offer) => {
      if (city.toLowerCase() === offer.city.name.toLowerCase()) {
        return filtredOffer.push(offer);
      }
    });

    return filtredOffer;
  };

  return (
    <ul className="favorites__list">
      {uniqueCity
        .map((city) =>
          <CardItemFavorite offers={filterOffers(city, offers)} city={city} key={city}/>,
        )}
    </ul>
  );
}

CardListFavorite.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
};

export default CardListFavorite;
