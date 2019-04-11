// @flow
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux';
import reducer from './reducers/reducers';

import type { State } from './state-types';
import type { Action } from './actions';

export type Store = ReduxStore<State, Action>;
export type GetState = () => State;
/* eslint-disable no-use-before-define */
export type Dispatch = ReduxDispatch<Action> & Thunk<Action>;
/* eslint-enable */
export type Thunk<A> = ((Dispatch, GetState) => Promise<void> | void) => A;

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore<State, Action, any>(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);
/* eslint-enable */

export default store;
