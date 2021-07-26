import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {REVIEWS} from './mock/reviews';
import {Provider} from 'react-redux';
import rootReducer from './store/root-reducer';
import {createAPI} from './services/api';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './const';
import {checkAuth} from './store/api-action';
import {redirect} from './store/middleware/redirect';
import {configureStore} from '@reduxjs/toolkit';


const api = createAPI(() => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)));

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuth());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={REVIEWS}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

