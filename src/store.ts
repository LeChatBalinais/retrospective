import { createStore, compose, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import reducer from './reducers/reducers';
import { State } from './types/state';
import { Action } from './types/types';

/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<State, Action>))
);
/* eslint-enable */
/* eslint-enable */

export default store;
