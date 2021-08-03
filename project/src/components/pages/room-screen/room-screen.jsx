import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import NearPlacesList from '../../near-places/near-places-list';
import {useDispatch, useSelector} from 'react-redux';
import PageHeader from '../../wrapper/page-header/page-header';
import {fetchActiveOffer, fetchOffersNearbyList, fetchReviewsList} from '../../../store/api-action';
import Property from '../../property/property';
import {
  getActiveOffer,
  getDataLoaded,
  getDataOfferLoaded,
  getOffers,
  getReviews,
  getSelectedOffer
} from '../../../store/data-loaded/selectors';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {getComment} from '../../../store/data-send/selectors';

function RoomScreen(props) {

  const {
    offerId,
  } = props;

  const reviews = useSelector(getReviews),
    offers = useSelector(getOffers),
    selectedOffer = useSelector(getSelectedOffer),
    isDataLoaded = useSelector(getDataLoaded),
    isDataOfferLoaded = useSelector(getDataOfferLoaded),
    authorizationStatus = useSelector(getAuthorizationStatus),
    comment = useSelector(getComment),
    activeOffer = useSelector(getActiveOffer);

  const dispatch = useDispatch();

  const handlerReviewsList = (id) => {
    dispatch(fetchReviewsList(id));
  };

  const handlerActiveOffer = (id) => {
    dispatch(fetchActiveOffer(id));
  };

  const handlerNearbyOffersList = (id) => {
    dispatch(fetchOffersNearbyList(id));
  };

  useEffect(() => {
    handlerActiveOffer(offerId);
    handlerReviewsList(offerId);
    handlerNearbyOffersList(offerId);
  }, [isDataLoaded, offerId]);

  useEffect(() => {
    handlerReviewsList(offerId);
  }, [comment]);

  return (
    <div className="page">
      <PageHeader/>

      <main className="page__main page__main--property">
        <Property
          isDataLoaded={isDataOfferLoaded}
          selectedOffer={selectedOffer}
          reviews={reviews}
          offers={offers}
          authorizationStatus={authorizationStatus}
          activeOffer={activeOffer}
        />

        <div className="container">
          <NearPlacesList
            offers={offers}
          />
        </div>
      </main>

    </div>
  );
}

RoomScreen.propTypes = {
  offerId: PropTypes.string.isRequired,
};

export default RoomScreen;
