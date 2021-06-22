import React from 'react';
import CardFavorite from './card-favorite';
import PropTypes from 'prop-types';
import offerPropsType from '../../prop-types/offer';

function CardFavoritePlaceList(props) {
  const {offers} = props;
  return (
    <div className="favorites__places">
      {offers.map((offer) => <CardFavorite key={offer.id} offer={offer}/>,
      )}
    </div>
  );
}

CardFavoritePlaceList.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
};

export default CardFavoritePlaceList;
