import { State } from '~/state';
import { Reducer } from '~/utils/create-reducer';
import * as tagDeletionConfirmed from './saga-tag-deletion-confirmed';
import * as tagSavingConfirmed from './saga-tag-saving-confirmed';
import * as tagsFetchingFetched from './saga-tags-fetching-fetched';
import * as videosFetchingFetched from './saga-videos-fetching-fetched';
import * as videoSeekDelayEnded from './saga-video-seek-delay-ended';

export type Action =
  | tagDeletionConfirmed.Action
  | tagSavingConfirmed.Action
  | tagsFetchingFetched.Action
  | videoSeekDelayEnded.Action
  | videosFetchingFetched.Action;

export type ActionID =
  | tagDeletionConfirmed.ActionID
  | tagSavingConfirmed.ActionID
  | tagsFetchingFetched.ActionID
  | videoSeekDelayEnded.ActionID
  | videosFetchingFetched.ActionID;

export type Payload<T> = T extends tagDeletionConfirmed.ActionID
  ? tagDeletionConfirmed.Payload
  : T extends tagSavingConfirmed.ActionID
  ? tagSavingConfirmed.Payload
  : T extends tagsFetchingFetched.ActionID
  ? tagsFetchingFetched.Payload
  : T extends videoSeekDelayEnded.ActionID
  ? videoSeekDelayEnded.Payload
  : T extends videosFetchingFetched.ActionID
  ? videosFetchingFetched.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...tagDeletionConfirmed.reducer,
  ...tagSavingConfirmed.reducer,
  ...tagsFetchingFetched.reducer,
  ...videoSeekDelayEnded.reducer,
  ...videosFetchingFetched.reducer
};
