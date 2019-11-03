import { State } from '~/state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as durationChanged from './ui-player-video-duration-changed';
import * as paused from './ui-player-video-paused';
import * as playedToTime from './ui-player-video-played-to-time';
import * as playing from './ui-player-video-playing';
import * as seeked from './ui-player-video-seeked';
import * as seeking from './ui-player-video-seeking';

export type Action =
  | durationChanged.Action
  | paused.Action
  | playedToTime.Action
  | playing.Action
  | seeked.Action
  | seeking.Action;

export type ActionID =
  | durationChanged.ActionID
  | paused.ActionID
  | playedToTime.ActionID
  | playing.ActionID
  | seeked.ActionID
  | seeking.ActionID;

export type Payload<T> = T extends durationChanged.ActionID
  ? durationChanged.Payload
  : T extends paused.ActionID
  ? paused.Payload
  : T extends playedToTime.ActionID
  ? playedToTime.Payload
  : T extends playing.ActionID
  ? playing.Payload
  : T extends seeked.ActionID
  ? seeked.Payload
  : T extends seeking.ActionID
  ? seeking.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...durationChanged.reducer,
  ...paused.reducer,
  ...playedToTime.reducer,
  ...playing.reducer,
  ...seeked.reducer,
  ...seeking.reducer
};
