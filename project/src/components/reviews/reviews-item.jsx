import React from 'react';
import RatingElement from '../wrapper/rating/rating';
import reviewsPropsType from '../../prop-types/reviews';

function ReviewsItem({review}) {

  const {comment, user, rating} = review;
  const {name, avatarUrl} = user;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">{name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <RatingElement rating={rating}/>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li>
  );
}

ReviewsItem.propTypes = {
  review: reviewsPropsType,
};

export default ReviewsItem;
