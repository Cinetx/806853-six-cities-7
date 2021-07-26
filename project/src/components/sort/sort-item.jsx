import React from 'react';
import PropTypes from 'prop-types';
import sortPropsType from '../../prop-types/sort';

function SortItem(props) {
  const {sort, handlerSortTypeChange, sortType, handlerSortMenuOpen} = props;

  const placeOptionClass = 'places__option';
  const placeOptionClassActive = 'places__option places__option--active';

  return (
    <li
      onClick={() => {
        handlerSortTypeChange(sort.type);
        handlerSortMenuOpen(false);
      }}
      className={(sortType === sort.type ? placeOptionClassActive : placeOptionClass)} tabIndex="0"
    >
      {sort.type}
    </li>
  );
}

SortItem.propTypes = {
  sort: sortPropsType,
  handlerSortTypeChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  handlerSortMenuOpen: PropTypes.func.isRequired,
};

export default SortItem;
