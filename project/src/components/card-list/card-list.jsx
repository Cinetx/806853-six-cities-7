import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import offerPropsType from '../../prop-types/offer';

function CardList(props) {
  const { offers } = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers
        .map((offer) =>
          <Card key={offer.id} offers={offer} />,
        )}
    </div>
  );
}

CardList.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
};

export default CardList;
