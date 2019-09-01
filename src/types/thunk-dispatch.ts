import { ThunkDispatch } from 'redux-thunk';
import { State } from './state';
import { Action } from './actions';

export type ThunkDispatch = ThunkDispatch<State, null, Action>;
