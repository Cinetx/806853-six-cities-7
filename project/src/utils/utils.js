import {AuthorizationStatus} from '../const';

export const adaptToClient = (offer) => {
  const adaptedOffer = Object.assign({}, offer, {
    id: offer.id,
    title: offer.title,
    rating: adaptRating(offer.rating),
    price: offer.price,
    type: offer.type,
    isFavorite: offer['is_favorite'],
    isPremium: offer['is_premium'],
    previewImage: offer['preview_image'],

    bedrooms: offer.bedrooms,
    maxAdults: offer['max_adults'],
    description: offer.description,
    goods: offer.goods,

    city: {
      name: offer.city.name,
      location: {
        lat: offer.city.location.latitude,
        lng: offer.city.location.longitude,
        zoom: offer.city.location.zoom,
      },
    },

    host: {
      avatarUrl: offer.host['avatar_url'],
      id: offer.host.id,
      isPro: offer.host['is_pro'],
      name: offer.host.name,
    },

    images: offer.images,

    location: {
      lat: offer.location.latitude,
      lng: offer.location.longitude,
      zoom: offer.location.zoom,
    },

  });

  delete adaptedOffer['is_favorite'];
  delete adaptedOffer['is_premium'];
  delete adaptedOffer['preview_image'];
  delete adaptedOffer['max_adults'];

  return adaptedOffer;
};

const adaptRating = (rating) => {
  let adaptedRating = Math.round(rating);

  if (adaptedRating > 5) {
    return adaptedRating = 5;
  }
  return adaptedRating;
};

export const adaptToClientReviews = (review) => (
  Object.assign({}, review, {

    id: review.id,
    date: review.date,
    comment: review.comment,
    rating: review.rating,

    user: {
      avatarUrl: review.user['avatar_url'],
      id: review.user.id,
      isPro: review.user['is_pro'],
      name: review.user.name,
    },
  })
);

export const adaptToClientUser = (user) => {
  const adaptedUser = Object.assign({}, user, {
    avatarUrl: user['avatar_url'],
    email: user.email,
    id: user.id,
    isPro: user['is_pro'],
    name: user.name,
    token: user.token,
  });

  delete adaptedUser['avatar_url'];
  delete adaptedUser['is_pro'];

  return adaptedUser;
};

export const isCheckedAuth = (authorizationStatus) => authorizationStatus === AuthorizationStatus.UNKNOWN;
