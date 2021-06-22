import React from 'react';
import { PropTypes } from 'prop-types';

function RatingElement(props) {
  const { rating } = props;

  const ratingCssStyle = `${rating * 20} + %`;

  return (
    <div className="place-card__stars rating__stars">
      <span style={{ width: ratingCssStyle }}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  );
}

RatingElement.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default RatingElement;
