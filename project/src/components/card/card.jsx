import React, {useState} from 'react';
import ButtonFavorite from '../wrapper/button-favorite/button-favorite';
import RatingElement from '../wrapper/rating/rating';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import offerPropsType from '../../prop-types/offer';

function Card({offers}) {
  const {name, price, rating, type, isFavorite, isPremium} = offers;
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => setHover(hover);
  const onMouseLeave = () => setHover(hover);

  return (
    <article className="cities__place-card place-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image"/>
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
          <RatingElement rating={rating}/>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.ROOM}>{name}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  offers: offerPropsType,
};

export default Card;
