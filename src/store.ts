import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import reducer from './reducers/root-reducer';
import rootSaga from './sagas/root-saga';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  (window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose) || compose;
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
/* eslint-enable */
/* eslint-enable */

sagaMiddleware.run(rootSaga);

export default store;
