import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Router as BrowserRouter } from 'react-router-dom';
import {AppRoute, CITY} from '../../const';
import reviewPropsType from '../../prop-types/reviews';
import MainScreen from '../pages/main-screen/main-screen';
import FavoritesScreen from '../pages/favorites-screen/favorites-screen';
import LoginScreen from '../pages/login-screen/login-screen';
import RoomScreen from '../pages/room-screen/room-screen';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import {connect} from 'react-redux';
import PrivateRoute from '../../hoc/private-route/private-route';
import browserHistory from '../../browser-history';

function App(props) {
  const { reviews} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <MainScreen cityList={CITY}/>
        </Route>

        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={()=> <FavoritesScreen />}
        >
        </PrivateRoute>

        <Route
          exact
          path={AppRoute.LOGIN}
          render={({history})=> <LoginScreen onClickSubmit={()=> history.push(AppRoute.MAIN)}/>}
        >

        </Route>

        <Route
          exact
          path={AppRoute.ROOM}
          render={({match})=>{
            const offerId = match.params.id;
            return <RoomScreen offerId={offerId} reviews={reviews} city={CITY[0]}/>;
          }}
        />

        <Route>
          <NotFoundScreen />
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropsType).isRequired,
};

const mapStateToProps = (state)=> ({
  authorizationStatus: state.authorizationStatus,
});

export default connect(mapStateToProps, null)(App);
