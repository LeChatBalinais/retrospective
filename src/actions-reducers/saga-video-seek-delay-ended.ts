import { ActionTemplate } from '~/utils/action-template';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { makeActionCreator } from '~/utils/make-action-creator';
import {
  getSeekVideo,
  getStageVideoAt,
  getLastRequestedStage,
  isDelayOn
} from '~/getters/player';
import {
  setSeekVideo,
  setLastRequestedStage,
  setDelayOn
} from '~/setters/player';
import { timeIsCloseEnough } from '~/utils/time-is-close-enough';

export type ActionID = 'SAGA_VIDEO_SEEK_DELAY_ENDED';

export const ACTION_ID = 'SAGA_VIDEO_SEEK_DELAY_ENDED';

export interface Payload {
  requestedStage: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getRequestedStage = (state: State, { requestedStage }: Payload): number =>
  requestedStage;

const calculateSeekVideo = (
  stageVideoAt: number,
  prevLastRequestedStage: number
): boolean => !timeIsCloseEnough(stageVideoAt, prevLastRequestedStage);

const calculateLastRequestedStage = (
  stageVideoAt: number,
  prevLastRequestedStage: number
): number =>
  timeIsCloseEnough(stageVideoAt, prevLastRequestedStage)
    ? undefined
    : prevLastRequestedStage;

const calculateDelayOn = (): boolean => false;

const partialReducers = [
  createPartialReducer(getSeekVideo, setSeekVideo, calculateSeekVideo, [
    getStageVideoAt,
    getLastRequestedStage
  ]),
  createPartialReducer(
    getLastRequestedStage,
    setLastRequestedStage,
    calculateLastRequestedStage,
    [getStageVideoAt, getLastRequestedStage]
  ),
  createPartialReducer(isDelayOn, setDelayOn, calculateDelayOn)
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
