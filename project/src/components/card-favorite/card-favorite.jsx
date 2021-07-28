import React from 'react';
import RatingElement from '../wrapper/rating/rating';
import {AppRoute, ButtonFavoriteStyleType} from '../../const';
import {Link} from 'react-router-dom';
import offerPropsType from '../../prop-types/offer';
import ButtonFavorite from '../wrapper/button-favorite/button-favorite';

function CardFavorite({offer}) {

  const { title, price, rating, type, previewImage, id, isFavorite } = offer;

  return (
    <article className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="/#">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place image" />
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavorite isFavorite={isFavorite} id={id} buttonFavoriteStyle={ButtonFavoriteStyleType.normal} />
        </div>
        <div className="place-card__rating rating">
          <RatingElement rating={rating}/>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.ROOM}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

CardFavorite.propTypes = {
  offer: offerPropsType,
};
export default CardFavorite;
