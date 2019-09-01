import { ThunkAction } from 'redux-thunk';
import { State } from '../state';
import { SimpleAction } from './simple-action';

export interface ActionCombination {
  type: 'ACTION_COMBINATION';
  actions: Action[];
}

export type Action = SimpleAction | ActionCombination;

export type ThunkAction = ThunkAction<void, State, null, Action>;
