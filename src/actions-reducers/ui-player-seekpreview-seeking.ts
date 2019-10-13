import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, VideoStatus } from '~/state';
import createReducer from '~/utils/create-reducer';
import {
  getSeekPreviewStatus,
  getStageSeekPreviewSeekingTo
} from '~/getters/player';
import { getVideoDuration } from '~/getters/footage';
import {
  setSeekPreviewStatus,
  setStageSeekPreviewSeekingTo
} from '~/setters/player';
import { createPartialReducer } from '~/utils/create-partial-reducer';

export type ActionID = 'UI_PLAYER_SEEKPREVIEW_SEEKING';
export const ACTION_ID: ActionID = 'UI_PLAYER_SEEKPREVIEW_SEEKING';

export interface Payload {
  time: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getToTime = (state: State, { time }: Payload): number => time;

const calculateSeekPreviewStatus = (): VideoStatus => VideoStatus.Seeking;

const calculateStageSeekPreviewSeekingTo = (
  duration: number,
  toTime: number
): number => toTime / duration;

const partialReducers = [
  createPartialReducer(
    getSeekPreviewStatus,
    setSeekPreviewStatus,
    calculateSeekPreviewStatus
  ),
  createPartialReducer(
    getStageSeekPreviewSeekingTo,
    setStageSeekPreviewSeekingTo,
    calculateStageSeekPreviewSeekingTo,
    [getVideoDuration, getToTime]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
