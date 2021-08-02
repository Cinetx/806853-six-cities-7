import React from 'react';
import ReviewsItem from './reviews-item';
import PropTypes from 'prop-types';
import reviewsPropsType from '../../prop-types/reviews';
import {MIN_REVIEW_IN_ROOM_PAGE, MAX_REVIEW_IN_ROOM_PAGE} from '../../const';


function ReviewsList(props) {
  const {reviews} = props;
  const reviewsNumber = reviews.length;


  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsNumber}</span></h2>
      <ul className="reviews__list">
        {reviews
          .slice(MIN_REVIEW_IN_ROOM_PAGE, MAX_REVIEW_IN_ROOM_PAGE)
          .sort((a, b)=> new Date(b.date) - new Date(a.date))
          .map((review) => <ReviewsItem key={review.id} review={review}/>,
          )}
      </ul>
    </>
  );
}

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewsPropsType).isRequired,
};

export default ReviewsList;
