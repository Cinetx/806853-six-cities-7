import React, {useCallback, useEffect} from 'react';
import PropTypes from 'prop-types';
import CardList from '../../card-list/card-list';
import Map from '../../map/map';
import cityPropsType from '../../../prop-types/city';
import LocationList from '../../location/location-list';
import {useDispatch, useSelector} from 'react-redux';
import {showActiveOffer, cityChange} from '../../../store/action';
import Sort from '../../sort/sort';
import {fetchOffersList} from '../../../store/api-action';
import PageHeader from '../../wrapper/page-header/page-header';
import {
  getCity,
  getActiveOffer,
  getDataLoaded,
  getSortAndFilterOffers
} from '../../../store/data-loaded/selectors';
import MainEmpty from '../../main-empty/main-empty';

function MainScreen(props) {
  const {
    cityList,
  } = props;

  const offers = useSelector(getSortAndFilterOffers),
    city = useSelector(getCity),
    isDataLoaded = useSelector(getDataLoaded),
    activeOffer = useSelector(getActiveOffer);

  const dispatch = useDispatch();

  const handlerCityChange = (toCity) => {
    dispatch(cityChange(toCity));
  };

  const handlerActiveOffer = (id) => {
    dispatch(showActiveOffer(id));
  };

  const handlerOffersList = () => {
    dispatch(fetchOffersList());
  };

  useEffect(() => {
    handlerOffersList();

  }, [isDataLoaded]);

  const onOfferMouseEnter = useCallback(
    (id) => handlerActiveOffer(id),
    [],
  );

  const onOfferMouseLeave = useCallback(
    () => handlerActiveOffer(null),
    [],
  );


  return (
    <div className="page page--gray page--main">
      <PageHeader/>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationList activeCity={city} cityList={cityList} cityChange={handlerCityChange}/>
          </section>
        </div>
        {(offers.length === 0 && isDataLoaded === true) ? <MainEmpty/> :
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
                  <Map
                    city={city}
                    offers={offers}
                    activeOffer={activeOffer}
                  />
                </section>
              </div>
            </div>
          </div>}
      </main>
    </div>
  );
}

MainScreen.propTypes = {
  cityList: PropTypes.arrayOf(cityPropsType).isRequired,
};

export default MainScreen;
