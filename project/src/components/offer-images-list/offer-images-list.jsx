import React from 'react';
import OfferImageItem from './offer-image-item';
import PropTypes from 'prop-types';

function OfferImagesList({images}) {
  return (
    <div className="property__gallery">
      {images.map((image)=> <OfferImageItem image={image} key={image}/>)}
    </div>
  );
}

OfferImagesList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default OfferImagesList;
