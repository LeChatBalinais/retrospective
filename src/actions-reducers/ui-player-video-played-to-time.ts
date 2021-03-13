import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { setStageVideoAt } from '~/setters/player';
import { getStageVideoAt, getVideoDuration } from '~/getters/player';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'UI_PLAYER_VIDEO_PLAYED_TO_TIME';
export const ACTION_ID = 'UI_PLAYER_VIDEO_PLAYED_TO_TIME';

export interface Payload {
  time: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTime = (state: State, { time }: Payload): number => time;

const getNewStageVideoAt = (duration: number, time: number): number =>
  time / duration;

export const reducer = createReducer(ACTION_ID, [
  [
    getStageVideoAt,
    setStageVideoAt,
    mapStateToDeterminer(getNewStageVideoAt, [getVideoDuration, getTime])
  ]
]);
