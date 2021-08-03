import React from 'react';
import NearPlace from './near-place';
import PropTypes from 'prop-types';
import offerPropsType from '../../prop-types/offer';

function NearPlacesList(props) {
  const {
    offers,
  } = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {offers.map((offer) =>
          (
            <NearPlace
              offer={offer} key={offer.id}
            />
          ),
        )}
      </div>
    </section>
  );
}

NearPlacesList.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
};

export default NearPlacesList;
