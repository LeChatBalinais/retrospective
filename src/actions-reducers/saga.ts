import { State } from '~/state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as tagDeletionConfirmed from './saga-tag-deletion-confirmed';
import * as tagSavingConfirmed from './saga-tag-saving-confirmed';
import * as tagsFetchingFetched from './saga-tags-fetching-fetched';
import * as videoSeekDelayEnded from './saga-video-seek-delay-ended';

export type SagaAction =
  | tagDeletionConfirmed.Action
  | tagSavingConfirmed.Action
  | tagsFetchingFetched.Action
  | videoSeekDelayEnded.Action;

type SagaReducersRegister = {
  [P in SagaAction['type']]: Reducer<P, State, SagaAction['payload']>;
};

export const sagaReducersRegister: SagaReducersRegister = {
  ...tagDeletionConfirmed.reducer,
  ...tagSavingConfirmed.reducer,
  ...tagsFetchingFetched.reducer,
  ...videoSeekDelayEnded.reducer
};
