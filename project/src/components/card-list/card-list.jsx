import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offerPropsType from '../../prop-types/offer';

function CardList(props) {
  const {offers, onOfferMouseEnter, onOfferMouseLeave} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers
        .map((offer) =>
          (<Card key={offer.id} offer={offer} onOfferMouseEnter={onOfferMouseEnter} onOfferMouseLeave={onOfferMouseLeave} />),
        )}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
  onOfferMouseEnter: PropTypes.func.isRequired,
  onOfferMouseLeave: PropTypes.func.isRequired,
};

export default CardList;

