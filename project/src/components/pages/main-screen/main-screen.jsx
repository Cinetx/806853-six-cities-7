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
import {fetchOffersList} from '../../../store/api-action';
import PageHeader from '../../wrapper/page-header/page-header';

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
      <PageHeader />

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
                <CardList
                  isDataLoaded={isDataLoaded}
                  offers={offers}
                  onOfferMouseEnter={onOfferMouseEnter}
                  onOfferMouseLeave={onOfferMouseLeave}
                />
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
