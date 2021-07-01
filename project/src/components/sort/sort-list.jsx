import React from 'react';
import {SORT_BY} from '../../const';
import SortItem from './sort-item';
import PropTypes from 'prop-types';

function SortList(props) {
  const {menuOpen, sortState, setSortStateActive, setMenuOpen} = props;

  const menuClass = 'places__options places__options--custom';
  const menuClassOpen = 'places__options places__options--custom places__options--opened';

  return (
    <ul className={menuOpen ? menuClassOpen : menuClass}>
      {SORT_BY.map((sort) =>
        (
          <SortItem
            setMenuOpen={setMenuOpen}
            setSortStateActive={setSortStateActive}
            sortState={sortState}
            sort={sort}
            key={sort.markup}
          />
        ),
      )}
    </ul>
  );
}

SortList.propTypes = {
  sortState: PropTypes.string.isRequired,
  setSortStateActive: PropTypes.func.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
  menuOpen: PropTypes.bool,
};

export default SortList;
