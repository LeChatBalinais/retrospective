import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import { getVideoDuration } from '~/getters/footage';
import { setStageVideoAt, setStageSeekPreviewAt } from '~/setters/player';
import { setVideoDuration } from '~/setters/footage';
import { createReducer } from '~/utils/create-reducer';
import { getStageVideoAt, getStageSeekPreviewAt } from '~/getters/player';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'UI_PLAYER_VIDEO_DURATION_CHANGED';
export const ACTION_ID = 'UI_PLAYER_VIDEO_DURATION_CHANGED';

export interface Payload {
  duration: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getDuration = (state: State, { duration }: Payload): number => duration;

const getNewDuration = (duration: number): number => duration;

const getNewStageVideoAt = (): number => 0;

const getNewStageSeekPreviewAt = getNewStageVideoAt;

export const reducer = createReducer(ACTION_ID, [
  [
    getVideoDuration,
    setVideoDuration,
    mapStateToDeterminer(getNewDuration, [getDuration])
  ],
  [getStageVideoAt, setStageVideoAt, mapStateToDeterminer(getNewStageVideoAt)],
  [
    getStageSeekPreviewAt,
    setStageSeekPreviewAt,
    mapStateToDeterminer(getNewStageSeekPreviewAt)
  ]
]);
