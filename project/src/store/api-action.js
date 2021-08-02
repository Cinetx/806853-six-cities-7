import {
  loadOffers,
  loadReviews,
  redirectToRoute,
  requireAuthorization,
  loadSelectOffer,
  loginUser,
  logoutUser, changeOfferFavoriteStatus, setCommentSendSuccess, setCommentSendError, setCommentSending
} from './action';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {adaptToCliendUser, adaptToClient, adaptToClientReviews} from '../utils/utils';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map((offer)=> adaptToClient(offer)))))
    .catch(()=> dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
);

export const fetchOffersNearbyList = (offerId) => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS + offerId + APIRoute.NEARBY)
    .then(({data}) => dispatch(loadOffers(data.map((offer)=> adaptToClient(offer)))))
);

export const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(loadOffers(data.map((offer)=> adaptToClient(offer)))))
    .catch(()=> dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
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

export const sendMessage = (comment, rating, id) => (dispatch, _getState, api) => {
  dispatch(setCommentSending(true));
  dispatch(setCommentSendSuccess(false));
  dispatch(setCommentSendError(false));
  return api.post(APIRoute.REVIEWS + id, {comment, rating})
    .then(()=> fetchReviewsList(id))
    .then(()=> {
      dispatch(setCommentSendSuccess(true));
      dispatch(setCommentSendError(false));
      dispatch(setCommentSending(false));
    })
    .catch((error)=> {
      dispatch(setCommentSendSuccess(false));
      dispatch(setCommentSendError(true));
      dispatch(setCommentSending(false));
    });
};

export const addToFavorites = (id, isFavorite) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE + id  }/${isFavorite ? 0 : 1}`)
    .then(()=> dispatch(changeOfferFavoriteStatus(id)))
    .catch(()=> dispatch(redirectToRoute(AppRoute.LOGIN)))
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(logoutUser()))
);
