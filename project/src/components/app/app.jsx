import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { AppRoute } from '../../const';

import MainScreen from '../page/main-screen/main-screen';
import FavoritesScreen from '../page/favorites-screen/favorites-screen';
import LoginScreen from '../page/login-screen/login-screen';
import RoomScreen from '../page/room-screen/room-screen';
import NotFoundScreen from '../page/not-found-screen/not-found-screen';

function App(props) {
  const { cardCount } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen cardCount={cardCount} />
        </Route>

        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesScreen />
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <LoginScreen />
        </Route>

        <Route exact path={AppRoute.ROOM}>
          <RoomScreen />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  cardCount: PropTypes.number.isRequired,
};

export default App;
