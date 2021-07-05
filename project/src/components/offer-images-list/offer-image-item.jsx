import React from 'react';
import PropTypes from 'prop-types';

function OfferImageItem({image}) {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={image} alt="Photo studio"/>
    </div>
  );
}

OfferImageItem.propTypes = {
  image: PropTypes.string.isRequired,
};

export default OfferImageItem;
