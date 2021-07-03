import React from 'react';
import SortList from './sort-list';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';

function Sort(props) {
  const {sortType, sortMenuOpen, sortTypeChange, sortMenuIsOpen} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={(evt) => {
          evt.preventDefault();
          sortMenuOpen(!sortMenuIsOpen);
        }}
        className="places__sorting-type" tabIndex="0"
      >&nbsp;{sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <SortList
        sortType={sortType}
        sortMenuIsOpen={sortMenuIsOpen}
        sortTypeChange={sortTypeChange}
        sortMenuOpen={sortMenuOpen}
      />
    </form>
  );
}

Sort.propTypes = {
  sortType: PropTypes.string.isRequired,
  sortTypeChange: PropTypes.func.isRequired,
  sortMenuIsOpen: PropTypes.bool.isRequired,
  sortMenuOpen: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
  sortMenuIsOpen: state.sortMenuIsOpen,
});

const mapDispatchToProps = (dispatch) => ({
  sortMenuOpen(menu) {
    dispatch(ActionCreator.sortMenuOpen(menu));
  },

  sortTypeChange(sortType) {
    dispatch(ActionCreator.sortTypeChange(sortType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
