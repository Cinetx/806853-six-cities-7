import {
  loadOffers,
  loadReviews,
  redirectToRoute,
  requireAuthorization,
  loadSelectOffer,
  loginUser,
  logoutUser, changeOfferFavoriteStatus
} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptToCliendUser, adaptToClient, adaptToClientReviews} from '../utils/utils';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.slice().map((offer)=> adaptToClient(offer)))))
    .catch(()=> dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchOffersNearbyList = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS + offerId + APIRoute.NEARBY)
    .then(({data}) => dispatch(loadOffers(data.slice().map((offer)=> adaptToClient(offer)))))
);

export const fetchActiveOffer = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS + offerId)
    .then(({data}) => dispatch(loadSelectOffer(Object.assign({}, adaptToClient(data)))))
    .catch(()=> dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);


export const fetchReviewsList = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEWS + offerId)
    .then(({data}) => dispatch(loadReviews(data.slice().map((review)=> adaptToClientReviews(review)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(loginUser(adaptToCliendUser(data)));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(loginUser(adaptToCliendUser(data)));

    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(()=> dispatch(redirectToRoute(AppRoute.MAIN)))
);

export const sendMessage = (comment, rating, id) => (dispatch, _getState, api) => (
  api.post(APIRoute.REVIEWS + id, {comment, rating})
    .then(()=> fetchReviewsList(id))
);

export const addToFavorites = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE + id  }/${  status}`)
    .then(()=> dispatch(changeOfferFavoriteStatus(id)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logoutUser()))

);
