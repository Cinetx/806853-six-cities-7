import React from 'react';
import PropTypes from 'prop-types';
import sortPropsType from '../../prop-types/sort';

function SortItem(props) {
  const {sort, sortTypeChange, sortType, sortMenuOpen} = props;

  const placeOptionClass = 'places__option';
  const placeOptionClassActive = 'places__option places__option--active';

  return (
    <li
      onClick={() => {
        sortTypeChange(sort.type);
        sortMenuOpen(false);
      }}
      className={(sortType === sort.type ? placeOptionClassActive : placeOptionClass)} tabIndex="0"
    >
      {sort.type}
    </li>
  );
}

SortItem.propTypes = {
  sort: sortPropsType,
  sortTypeChange: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  sortMenuOpen: PropTypes.func.isRequired,
};

export default SortItem;
