import React, {memo} from 'react';
import ButtonFavorite from '../wrapper/button-favorite/button-favorite';
import RatingElement from '../wrapper/rating/rating';
import offerPropsType from '../../prop-types/offer';
import PropTypes from 'prop-types';
import PlaceName from '../wrapper/place-name/place-name';

function Card(props) {

  const {onOfferMouseEnter, onOfferMouseLeave, offer} = props;
  const {title, price, rating, type, isFavorite, isPremium, id, previewImage} = offer;

  return (
    <article className="cities__place-card place-card" onMouseEnter={() => {onOfferMouseEnter(id);}} onMouseLeave={onOfferMouseLeave}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavorite isFavorite={isFavorite}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <RatingElement rating={rating}/>
          </div>
        </div>
        <PlaceName id={id} title={title} />
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offer: offerPropsType,
  onOfferMouseEnter: PropTypes.func.isRequired,
  onOfferMouseLeave: PropTypes.func.isRequired,
};

export default memo(Card);
