import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { PlaybackStatus } from '~/state';
import { createReducer } from '~/utils/experimental/create-reducer';
import { getPlaybackStatus } from '~/getters/player';
import { setPlaybackStatus } from '~/setters/player';
import { mapStateToDeterminer } from '~/utils/experimental/map-state-to-determiner';

export type ActionID = 'PLAY_BUTTON_CLICKED';
export const ACTION_ID = 'PLAY_BUTTON_CLICKED';
export type Payload = undefined;

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const getNewPlaybackStatus = (
  prevPlaybackStatus: PlaybackStatus
): PlaybackStatus =>
  prevPlaybackStatus === PlaybackStatus.Playing
    ? PlaybackStatus.Paused
    : PlaybackStatus.Playing;

export const reducer = createReducer(ACTION_ID, [
  [
    getPlaybackStatus,
    setPlaybackStatus,
    mapStateToDeterminer(getNewPlaybackStatus, [getPlaybackStatus])
  ]
]);
