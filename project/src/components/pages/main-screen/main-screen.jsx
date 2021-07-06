import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import CardList from '../../card-list/card-list';
import offerPropsType from '../../../prop-types/offer';
import Map from '../../map/map';
import cityPropsType from '../../../prop-types/city';
import LocationList from '../../location/location-list';
import {filterOffers, sortOffers} from '../../../utils/filter';
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import Sort from '../../sort/sort';
import Spinner from '../../wrapper/spinner/spinner';
import {fetchOffersList} from '../../../store/api-action';

function MainScreen(props) {
  const {offers, city, cityList, cityChange, activeOffer, getActiveOffer, isDataLoaded, getOffersList} = props;

  useEffect(() => {
    getOffersList();
  }, [isDataLoaded]);

  const onOfferMouseEnter = (id) => {
    getActiveOffer(id);
  };

  const onOfferMouseLeave = () => {
    getActiveOffer(null);
  };

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList activeCity={city} cityList={cityList} cityChange={cityChange}/>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort/>
              <div className="cities__places-list places__list tabs__content">
                {isDataLoaded ?
                  <CardList
                    offers={offers}
                    onOfferMouseEnter={onOfferMouseEnter}
                    onOfferMouseLeave={onOfferMouseLeave}
                  />
                  : <Spinner/>}

              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={city} offers={offers} activeOffer={activeOffer}/>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
  cityList: PropTypes.arrayOf(cityPropsType).isRequired,
  city: cityPropsType,
  cityChange: PropTypes.func.isRequired,
  activeOffer: PropTypes.number,
  getActiveOffer: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  getOffersList: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  sortType: state.sort,
  offers: sortOffers(state.sortType, filterOffers(state.city.name, state.offers)),
  activeOffer: state.activeOffer,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  cityChange(city) {
    dispatch(ActionCreator.cityChange(city));
  },

  getActiveOffer(id) {
    dispatch(ActionCreator.getActiveOffer(id));
  },

  getOffersList() {
    dispatch(fetchOffersList());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
