import { Dispatch as ReduxDispatch } from 'redux';
import { Action } from '~/actions-reducers/index';

export type Dispatch = ReduxDispatch<Action>;
