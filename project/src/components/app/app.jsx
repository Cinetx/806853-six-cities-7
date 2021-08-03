import React from 'react';
import {AppRoute, AuthorizationStatus, CITIES} from '../../const';
import MainScreen from '../pages/main-screen/main-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import RoomScreen from '../pages/room-screen/room-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../../hoc/private-route/private-route';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainScreen cityList={CITIES}/>
      </Route>

      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => <FavoritesScreen/>}
      >
      </PrivateRoute>

      <PrivateRoute
        exact
        status={AuthorizationStatus.NO_AUTH}
        path={AppRoute.LOGIN}
        redirect={AppRoute.MAIN}
        render={()=> <LoginScreen/>}
      />

      <Route
        exact
        path={AppRoute.ROOM}
        render={({match}) => {
          const offerId = match.params.id;
          return <RoomScreen offerId={offerId} city={CITIES[0]}/>;
        }}
      />

      <Route>
        <NotFoundScreen/>
      </Route>

    </Switch>
  );
}

export default App;
