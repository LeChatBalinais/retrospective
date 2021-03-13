import { ActionTemplate } from '~/utils/action-template';
import { PlaybackStatus } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { getPlaybackStatus } from '~/getters/player';
import { setPlaybackStatus } from '~/setters/player';
import { makeActionCreator } from '~/utils/make-action-creator';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'MOUSE_UP_ON_TAG';
export const ACTION_ID = 'MOUSE_UP_ON_TAG';

export type Payload = undefined;

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const getNewPlaybackStatus = (): PlaybackStatus => PlaybackStatus.Paused;

export const reducer = createReducer(ACTION_ID, [
  [
    getPlaybackStatus,
    setPlaybackStatus,
    mapStateToDeterminer(getNewPlaybackStatus)
  ]
]);
