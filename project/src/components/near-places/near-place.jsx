import React from 'react';
import RatingElement from '../wrapper/rating/rating';
import ButtonFavorite from '../wrapper/button-favorite/button-favorite';
import offerPropsType from '../../prop-types/offer';
import {generatePath, Link} from 'react-router-dom';
import {AppRoute} from '../../const';

function NearPlace({offer}) {

  const {title, price, rating, isFavorite, type, previewImage, id} = offer;


  return (
    <article className="near-places__card place-card">
      <div className="near-places__image-wrapper place-card__image-wrapper">
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
          <ButtonFavorite isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <RatingElement rating={rating} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={{ pathname: generatePath(AppRoute.ROOM, { id }) }}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );

}

NearPlace.propTypes = {
  offer: offerPropsType,
};
export default NearPlace;
