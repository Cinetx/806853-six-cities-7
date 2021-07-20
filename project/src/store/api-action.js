import {ActionCreator} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptToClient, adaptToClientReviews} from '../utils/utils';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.slice().map((offer)=> adaptToClient(offer)))))
);

export const fetchOffersNearbyList = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS + offerId + APIRoute.NEARBY)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.slice().map((offer)=> adaptToClient(offer)))))
);

export const fetchActiveOffer = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS + offerId)
    .then(({data}) => dispatch(ActionCreator.selectOffer(Object.assign({}, adaptToClient(data)))))
    .catch(()=> dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);


export const fetchReviewsList = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.REVIEWS + offerId)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.slice().map((review)=> adaptToClientReviews(review)))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.login(data.email));
    })
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.login(data.email));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(()=> dispatch(ActionCreator.redirectToRoute(AppRoute.MAIN)))
);

export const sendMessage = (comment, rating, id) => (dispatch, _getState, api) => (
  api.post(APIRoute.REVIEWS + id, {comment, rating})
    .then(()=> fetchReviewsList(id))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
);
