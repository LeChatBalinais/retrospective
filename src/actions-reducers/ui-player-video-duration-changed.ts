import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/types/state';
import { getVideoDuration } from '~/selectors/selectors';
import { setVideoDuration, setStageVideoAt } from '~/reducers/base';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import createReducer from '~/utils/create-reducer';
import { getStageVideoAt } from '~/selectors/common';

export type ActionID = 'UI_PLAYER_VIDEO_DURATION_CHANGED';
export const ACTION_ID = 'UI_PLAYER_VIDEO_DURATION_CHANGED';

export interface Payload {
  duration: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getDuration = (state: State, { duration }: Payload): number => duration;

const calculateDuration = (duration: number): number => duration;

const calculateStageVideoAt = (): number => 0;

const partialReducers = [
  createPartialReducer(getVideoDuration, setVideoDuration, calculateDuration, [
    getDuration
  ]),
  createPartialReducer(getStageVideoAt, setStageVideoAt, calculateStageVideoAt)
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
