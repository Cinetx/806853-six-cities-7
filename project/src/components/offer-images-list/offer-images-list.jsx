import React from 'react';
import OfferImageItem from './offer-image-item';
import PropTypes from 'prop-types';
import {MIN_IMAGE_IN_ROOM_PAGE, MAX_IMAGE_IN_ROOM_PAGE} from '../../const';

function OfferImagesList({images}) {
  return (
    <div className="property__gallery">
      {images.slice(MIN_IMAGE_IN_ROOM_PAGE, MAX_IMAGE_IN_ROOM_PAGE).map((image)=> <OfferImageItem image={image} key={image}/>)}
    </div>
  );
}

OfferImagesList.propTypes = {
  images: PropTypes.array.isRequired,
};

export default OfferImagesList;
