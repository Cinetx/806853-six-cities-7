import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {REVIEWS} from './mock/reviews';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {createAPI} from './services/api';
import {ActionCreator} from './store/action';
import {AuthorizationStatus} from './const';

const api = createAPI(()=> store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={REVIEWS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
