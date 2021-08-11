import React from 'react';
import OfferImagesList from '../offer-images-list/offer-images-list';
import Map from '../map/map';
import ReviewsList from '../reviews/reviews-list';
import PropTypes from 'prop-types';
import reviewsPropsType from '../../prop-types/reviews';
import ReviewForm from '../review-form/review-form';
import {AuthorizationStatus, ButtonFavoriteStyleType} from '../../const';
import cityPropsType from '../../prop-types/city';
import offerPropsType from '../../prop-types/offer';
import RatingElement from '../wrapper/rating/rating';
import withLoad from '../../hoc/withLoad/withLoad';
import ButtonFavorite from '../wrapper/button-favorite/button-favorite';
import HostAvatar from './img/avatar-angelina.jpg'
function Property(props) {

  const {
    selectedOffer,
    reviews,
    authorizationStatus,
    offers,
  } = props;


  const {
    title,
    rating,
    isPremium,
    isFavorite,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    images,
    city,
    id,
  } = selectedOffer;
  const {avatarUrl} = host;
  console.log(selectedOffer)

  const avatarClassProUser = 'property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper';
  const avatarClass = 'property__avatar-wrapper user__avatar-wrapper';

  return (
    <section className="property">
      <div className="property__gallery-container container">
        <OfferImagesList images={images}/>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium ?
            <div className="property__mark">
              <span>Premium</span>
            </div> : ''}
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <ButtonFavorite isFavorite={isFavorite} id={id} buttonFavoriteStyle={ButtonFavoriteStyleType.large} />
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <RatingElement rating={rating}/>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods.map((item) => (
                <li className="property__inside-item" key={item}>
                  {item}
                </li>),
              )}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={host.isPro ? avatarClassProUser : avatarClass}>
                <img
                  className="property__avatar user__avatar"
                  src={HostAvatar}
                  width="74"
                  height="74"
                  alt="Host avatar"
                />
              </div>
              <span className="property__user-name">{host.name}</span>
              {host.isPro ?
                <span className="property__user-status">Pro</span> : ''}
            </div>
            <div className="property__description">
              <p className="property__text">
                A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The
                building is green and from 18th century.
              </p>
              <p className="property__text">
                An independent House, strategically located between Rembrand Square and National Opera, but where
                the bustle of the city comes to rest in this alley flowery and colorful.
              </p>
            </div>
          </div>
          <section className="property__reviews reviews">
            <ReviewsList reviews={reviews} />
            {(authorizationStatus === AuthorizationStatus.AUTH) ? <ReviewForm id={id}/> : ''}
          </section>
        </div>
      </div>

      <section className="property__map map">
        <Map city={city} offers={[...offers, selectedOffer]} activeOffer={selectedOffer.id}/>
      </section>

    </section>

  );
}

Property.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
  reviews: PropTypes.arrayOf(reviewsPropsType).isRequired,
  selectedOffer: offerPropsType,
  city: cityPropsType,
  authorizationStatus: PropTypes.string.isRequired,
};

export default withLoad(Property);
