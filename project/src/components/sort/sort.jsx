import React, {useState} from 'react';
import SortList from './sort-list';
import PropTypes from 'prop-types';

function Sort(props) {
  const {sortState} = props;

  const [menuOpen, setMenuOpen] = useState();
  const [sortStateActive, setSortStateActive] = useState('Popular');

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={() => {setMenuOpen((menu) => !menu);}} className="places__sorting-type" tabIndex="0">&nbsp;{sortStateActive}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList
        setMenuOpen={setMenuOpen}
        setSortStateActive={setSortStateActive}
        sortState={sortState}
        menuOpen={menuOpen}
      />
    </form>
  );
}

Sort.propTypes = {
  sortState: PropTypes.string.isRequired,
};

export default Sort;
