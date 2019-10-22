import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { VideoStatus, State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getSeekPreviewStatus,
  getStageSeekPreviewAt,
  getStageSeekPreviewSeekingTo,
  isDelayOn
} from '~/getters/player';
import {
  setStageSeekPreviewAt,
  setSeekPreviewStatus,
  setStageSeekPreviewSeekingTo,
  setDelayOn
} from '~/setters/player';

export type ActionID = 'UI_PLAYER_SEEKPREVIEW_SEEKED';
export const ACTION_ID = 'UI_PLAYER_SEEKPREVIEW_SEEKED';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculateStageSeekPreviewAt = (stageVideoSeekingTo: number): number =>
  stageVideoSeekingTo;

const calculateSeekPreviewStatus = (): VideoStatus => VideoStatus.Paused;

const calculateStageSeekPreviewSeekingTo = (): number => undefined;

const calculateDelayOn = (): boolean => true;

const partialReducers = [
  createPartialReducer(isDelayOn, setDelayOn, calculateDelayOn),
  createPartialReducer(
    getStageSeekPreviewSeekingTo,
    setStageSeekPreviewSeekingTo,
    calculateStageSeekPreviewSeekingTo
  ),
  createPartialReducer(
    getSeekPreviewStatus,
    setSeekPreviewStatus,
    calculateSeekPreviewStatus
  ),
  createPartialReducer(
    getStageSeekPreviewAt,
    setStageSeekPreviewAt,
    calculateStageSeekPreviewAt,
    [getStageSeekPreviewSeekingTo]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
