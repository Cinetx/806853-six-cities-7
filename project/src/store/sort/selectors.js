import {NameSpace} from '../root-reducer';

export const getSortType = (state) => state[NameSpace.SORT].sortType;
export const getSortMenuOpen = (state) => state[NameSpace.SORT].sortMenuIsOpen;
