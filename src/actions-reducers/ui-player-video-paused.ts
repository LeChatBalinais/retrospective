import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { VideoStatus } from '~/state';
import { createReducer } from '~/utils/experimental/create-reducer';
import { getVideoStatus } from '~/getters/player';
import { setVideoStatus } from '~/setters/player';
import { mapStateToDeterminer } from '~/utils/experimental/map-state-to-determiner';

export type ActionID = 'UI_PLAYER_VIDEO_PAUSED';
export const ACTION_ID: ActionID = 'UI_PLAYER_VIDEO_PAUSED';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const getNewVideoStatus = (): VideoStatus => VideoStatus.Paused;

export const reducer = createReducer(ACTION_ID, [
  [getVideoStatus, setVideoStatus, mapStateToDeterminer(getNewVideoStatus)]
]);
