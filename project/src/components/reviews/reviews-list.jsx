import React from 'react';
import ReviewsItem from './reviews-item';
import PropTypes from 'prop-types';
import reviewsPropsType from '../../prop-types/reviews';

function ReviewsList({reviews}) {

  const reviewsNumber = reviews.length;

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsNumber}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => <ReviewsItem key={review.id} review={review}/>,
        )}
      </ul>
    </>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsPropsType).isRequired,
};

export default ReviewsList;
