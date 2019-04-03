// @flow

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers/reducers';

import type { State } from './reducers/default-state';
import type { Action } from './actions';

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore<State, Action, any>(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
/* eslint-enable */

export default store;
