import React from 'react';
import {PropTypes} from 'prop-types';

function RatingElement(props) {
  const {rating} = props;

  const ratingCssStyle = `${rating * 20}%`;

  return (
    <>
      <span style={{width: ratingCssStyle}}></span>
      <span className="visually-hidden">Rating</span>
    </>
  );
}

RatingElement.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default RatingElement;
