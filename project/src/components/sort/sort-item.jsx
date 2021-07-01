import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import sortPropsType from '../../prop-types/sort';

function SortItem(props) {
  const {sort, sortChange, sortState, setSortStateActive, setMenuOpen} = props;

  const placeOptionClass = 'places__option';
  const placeOptionClassActive = 'places__option places__option--active';

  return (
    <li
      onClick={() => {
        sortChange(sort.type);
        setSortStateActive(sort.markup);
        setMenuOpen(false);
      }}
      className={(sortState === sort.type ? placeOptionClassActive : placeOptionClass)} tabIndex="0"
    >
      {sort.markup}
    </li>
  );
}

SortItem.propTypes = {
  sort: sortPropsType,
  sortChange: PropTypes.func.isRequired,
  sortState: PropTypes.string.isRequired,
  setSortStateActive: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  sortChange(sortType, offers) {
    dispatch(ActionCreator.sortChange(sortType, offers));
  },
});

export default connect(null, mapDispatchToProps)(SortItem);
