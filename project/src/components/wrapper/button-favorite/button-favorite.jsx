import React from 'react';
import {PropTypes} from 'prop-types';
import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {addToFavorites} from '../../../store/api-action';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {redirectToRoute} from '../../../store/action';

function ButtonFavorite(props) {
  const {isFavorite, id, buttonFavoriteStyle} = props;

  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();

  const handlerAddToFavorites = (evt) => {
    evt.preventDefault();
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    }
    dispatch(addToFavorites(id, handlerFavoriteStatus()));
  };

  const handlerFavoriteStatus = () => isFavorite ? 0 : 1;

  const favoriteButtonClassName = `${buttonFavoriteStyle.type}__bookmark-button button`;
  const favoriteButtonClassNameActive = `${buttonFavoriteStyle.type}__bookmark-button button ${buttonFavoriteStyle.type}__bookmark-button--active`;

  return (
    <button
      onClick={handlerAddToFavorites}
      className={isFavorite ? favoriteButtonClassNameActive : favoriteButtonClassName}
      type="button"
    >
      <svg className={`${buttonFavoriteStyle.type}__bookmark-icon`} width={buttonFavoriteStyle.width} height={buttonFavoriteStyle.height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

ButtonFavorite.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  buttonFavoriteStyle: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

export default ButtonFavorite;

