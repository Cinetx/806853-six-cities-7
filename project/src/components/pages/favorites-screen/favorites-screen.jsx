import React, {useEffect} from 'react';
import CardListFavorite from '../../card-favorite/card-list-favorite';
import {useDispatch, useSelector} from 'react-redux';
import {fetchOffersList} from '../../../store/api-action';
import PageHeader from '../../wrapper/page-header/page-header';
import {getDataLoaded, getFavoritesOffers} from '../../../store/data-loaded/selectors';

function FavoritesScreen() {

  const isDataLoaded = useSelector(getDataLoaded);
  const offers = useSelector(getFavoritesOffers);
  const dispatch = useDispatch();

  const handlerOffersList = ()=>{
    dispatch(fetchOffersList());
  };

  useEffect(()=>{
    handlerOffersList();
  },[isDataLoaded]);

  return (
    <div className="page">
      <PageHeader/>

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

export default FavoritesScreen;
