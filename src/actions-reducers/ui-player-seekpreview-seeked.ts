import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { VideoStatus, SeekingStatus, SeekbarStatus, State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getSeekPreviewStatus,
  getStageSeekPreviewAt,
  getStageSeekPreviewSeekingTo,
  getSeekingStatus,
  getLastRequestedStage,
  getSeekbarStatus
} from '~/getters/player';
import {
  setStageSeekPreviewAt,
  setSeekingStatus,
  setLastRequestedStage,
  setSeekPreviewStatus,
  setStageSeekPreviewSeekingTo
} from '~/setters/player';

export type ActionID = 'UI_PLAYER_SEEKPREVIEW_SEEKED';
export const ACTION_ID = 'UI_PLAYER_SEEKPREVIEW_SEEKED';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculateStageSeekPreviewAt = (stageVideoSeekingTo: number): number =>
  stageVideoSeekingTo;

const calculateSeekingStatus = (
  stageVideoSeekingTo: number,
  lastRequestedStage: number,
  seekbarStatus: SeekbarStatus,
  prevSeekingStatus: SeekingStatus
): SeekingStatus =>
  stageVideoSeekingTo === lastRequestedStage &&
  seekbarStatus === SeekbarStatus.Idle
    ? SeekingStatus.NoSeeking
    : prevSeekingStatus;

const calculateLastRequestedStage = (
  stageVideoSeekingTo: number,
  prevLastRequestedStage: number
): number =>
  stageVideoSeekingTo === prevLastRequestedStage
    ? undefined
    : prevLastRequestedStage;

const calculateSeekPreviewStatus = (): VideoStatus => VideoStatus.Paused;

const calculateStageSeekPreviewSeekingTo = (): number => undefined;

const partialReducers = [
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
    getLastRequestedStage,
    setLastRequestedStage,
    calculateLastRequestedStage,
    [getStageSeekPreviewSeekingTo, getLastRequestedStage]
  ),
  createPartialReducer(
    getSeekingStatus,
    setSeekingStatus,
    calculateSeekingStatus,
    [
      getStageSeekPreviewSeekingTo,
      getLastRequestedStage,
      getSeekbarStatus,
      getSeekingStatus
    ]
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
