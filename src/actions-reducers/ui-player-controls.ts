import { State } from '~/state';
import { Reducer } from '~/utils/create-reducer';
import * as playButtonClicked from './ui-player-controls-play-button-clicked';

export type Action = playButtonClicked.Action;

export type ActionID = playButtonClicked.ActionID;

export type Payload<T> = T extends playButtonClicked.ActionID
  ? playButtonClicked.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...playButtonClicked.reducer
};
