import React from 'react';
import {PropTypes} from 'prop-types';
import {useDispatch} from 'react-redux';

import {addToFavorites} from '../../../store/api-action';


function ButtonFavorite(props) {
  const {isFavorite, id, buttonFavoriteStyle} = props;

  const dispatch = useDispatch();

  const handlerAddToFavorites = (evt) => {
    evt.preventDefault();
    dispatch(addToFavorites(id, isFavorite));
  };

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

