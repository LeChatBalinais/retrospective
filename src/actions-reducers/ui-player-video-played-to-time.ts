import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { setStageVideoAt } from '~/setters/player';
import { getStageVideoAt } from '~/getters/player';
import { getVideoDuration } from '~/getters/footage';
import { createPartialReducer } from '~/utils/create-partial-reducer';

export type ActionID = 'UI_PLAYER_VIDEO_PLAYED_TO_TIME';
export const ACTION_ID = 'UI_PLAYER_VIDEO_PLAYED_TO_TIME';

export interface Payload {
  time: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTime = (state: State, { time }: Payload): number => time;

const calculateStageVideoAt = (duration: number, time: number): number =>
  time / duration;

const partialReducers = [
  createPartialReducer(
    getStageVideoAt,
    setStageVideoAt,
    calculateStageVideoAt,
    [getVideoDuration, getTime]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
