import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import reviewsPropsType from '../../../prop-types/reviews';
import NearPlacesList from '../../near-places/near-places-list';
import offerPropsType from '../../../prop-types/offer';
import {connect} from 'react-redux';
import PageHeader from '../../wrapper/page-header/page-header';
import {fetchActiveOffer, fetchOffersNearbyList, fetchReviewsList} from '../../../store/api-action';
import Property from '../../property/property';
import commentPropsType from '../../../prop-types/comment';

function RoomScreen(props) {

  const {
    reviews,
    offers,
    selectedOffer,
    isDataLoaded,
    isDataOfferLoaded,
    getReviewsList,
    getNearbyOffersList,
    getOffer,
    authorizationStatus,
    offerId,
    comment,
  } = props;

  useEffect(() => {
    getOffer(offerId);
    getReviewsList(offerId);
    getNearbyOffersList(offerId);
  }, [isDataLoaded, offerId]);

  useEffect(() => {
    getReviewsList(offerId);
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
        />

        <div className="container">
          <NearPlacesList offers={offers}/>
        </div>
      </main>

    </div>
  );
}

RoomScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
  reviews: PropTypes.arrayOf(reviewsPropsType).isRequired,
  selectedOffer: PropTypes.object.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
  isDataOfferLoaded: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  getReviewsList: PropTypes.func.isRequired,
  getOffer: PropTypes.func.isRequired,
  getNearbyOffersList: PropTypes.func.isRequired,
  comment: commentPropsType,
  offerId: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
  reviews: state.reviews,
  activeOffer: state.activeOffer,
  selectedOffer: state.selectedOffer,
  isDataOfferLoaded: state.isDataOfferLoaded,
  comment: state.comment,
});


const mapDispatchToProps = (dispatch) => ({
  getReviewsList(activeOffer) {
    dispatch(fetchReviewsList(activeOffer));
  },

  getOffer(offerId) {
    dispatch(fetchActiveOffer(offerId));
  },

  getNearbyOffersList(offerId) {
    dispatch(fetchOffersNearbyList(offerId));
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(RoomScreen);
