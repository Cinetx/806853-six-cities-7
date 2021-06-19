import React from 'react';
import {PropTypes} from 'prop-types';
function ButtonFavorite(props) {
  const {isFavorite} = props;

  const favoriteButtonClassName = 'place-card__bookmark-button button';
  const favoriteButtonClassNameActive = 'place-card__bookmark-button button place-card__bookmark-button--active';

  return (
    <button className={isFavorite ? favoriteButtonClassNameActive : favoriteButtonClassName} type="button">
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

ButtonFavorite.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
};

export default ButtonFavorite;

