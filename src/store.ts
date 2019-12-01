import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { connectRoutes } from 'redux-first-router';
import { reducer } from './actions-reducers';
import rootSaga from './sagas/root-saga';
import routesMap from './routes-map';
import pageReducer from './pageReducer'
import { Action } from './actions-reducers/saga-tag-deletion-confirmed';
import { State } from './state';

const sagaMiddleware = createSagaMiddleware();

const { reducer: locationReducer, middleware: routerMiddleware, enhancer: routerEnhancer } = connectRoutes(routesMap)


const rootReducer = (state: State, action: Action): State => {
  const newState = reducer(state, action);
  return { ...newState, page: pageReducer(newState.page, action), location: locationReducer(newState.location, action) }
}

/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(routerEnhancer, applyMiddleware(sagaMiddleware, routerMiddleware))
);
/* eslint-enable */
/* eslint-enable */

sagaMiddleware.run(rootSaga);

export default store;
