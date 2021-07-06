import React, {useEffect} from 'react';
import CardListFavorite from '../../card-favorite/card-list-favorite';
import Logo from '../../logo/logo';
import PropTypes from 'prop-types';
import offerPropsType from '../../../prop-types/offer';
import {connect} from 'react-redux';
import {fetchOffersList} from '../../../store/api-action';

function FavoritesScreen(props) {
  const {offers, getOffersList, isDataLoaded} = props;

  useEffect(()=>{
    getOffersList();
  },[isDataLoaded]);

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="/#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <CardListFavorite offers={offers} />
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

FavoritesScreen.propTypes = {
  offers: PropTypes.arrayOf(offerPropsType).isRequired,
  getOffersList: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  city: state.city,
  offers: state.offers,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({

  getOffersList(){
    dispatch(fetchOffersList());
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesScreen);
