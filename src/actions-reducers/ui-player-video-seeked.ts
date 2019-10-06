import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import {
  VideoStatus,
  SeekingStatus,
  SeekbarStatus,
  State
} from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getVideoStatus,
  getStageVideoAt,
  getStageVideoSeekingTo,
  getSeekingStatus,
  getLastRequestedStage,
  getSeekbarStatus
} from '~/selectors/common';
import {
  setStageVideoAt,
  setSeekingStatus,
  setLastRequestedStage,
  setVideoStatus,
  setStageVideoSeekingTo
} from '~/reducers/base';

export type ActionID = 'UI_PLAYER_VIDEO_SEEKED';
export const ACTION_ID = 'UI_PLAYER_VIDEO_SEEKED';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculateStageVideoAt = (stageVideoSeekingTo: number): number =>
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

const calculateVideoStatus = (): VideoStatus => VideoStatus.Paused;

const calculateStageVideoSeekingTo = (): number => undefined;

const partialReducers = [
  createPartialReducer(
    getStageVideoSeekingTo,
    setStageVideoSeekingTo,
    calculateStageVideoSeekingTo
  ),
  createPartialReducer(getVideoStatus, setVideoStatus, calculateVideoStatus),
  createPartialReducer(
    getLastRequestedStage,
    setLastRequestedStage,
    calculateLastRequestedStage,
    [getStageVideoSeekingTo, getLastRequestedStage]
  ),
  createPartialReducer(
    getSeekingStatus,
    setSeekingStatus,
    calculateSeekingStatus,
    [
      getStageVideoSeekingTo,
      getLastRequestedStage,
      getSeekbarStatus,
      getSeekingStatus
    ]
  ),
  createPartialReducer(
    getStageVideoAt,
    setStageVideoAt,
    calculateStageVideoAt,
    [getStageVideoSeekingTo]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
