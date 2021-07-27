import React from 'react';
import SortList from './sort-list';
import {useDispatch, useSelector} from 'react-redux';
import {sortMenuOpen, sortTypeChange} from '../../store/action';
import {getSortMenuOpen, getSortType} from '../../store/sort/selectors';

function Sort() {
  const
    sortType = useSelector(getSortType),
    sortMenuIsOpen = useSelector(getSortMenuOpen);

  const dispatch = useDispatch();

  const handlerSortMenuOpen = (menu) => {
    dispatch(sortMenuOpen(menu));
  };

  const handlerSortTypeChange = (toSortType) => {
    dispatch(sortTypeChange(toSortType));
  };


  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        onClick={(evt) => {
          evt.preventDefault();
          handlerSortMenuOpen(!sortMenuIsOpen);
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
        handlerSortTypeChange={handlerSortTypeChange}
        handlerSortMenuOpen={handlerSortMenuOpen}
      />
    </form>
  );
}

export default Sort;
