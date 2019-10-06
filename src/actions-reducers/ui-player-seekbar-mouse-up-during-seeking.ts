import { ActionTemplate } from '~/utils/action-template';
import {
  SeekbarStatus,
  SeekingStatus,
  VideoStatus,
  State
} from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getSeekingStatus,
  getSeekbarStatus,
  getVideoStatus,
  getLastRequestedStage,
  getStageVideoAt
} from '~/selectors/common';
import { setSeekingStatus, setSeekbarStatus } from '~/reducers/base';
import { makeActionCreator } from '~/utils/make-action-creator';

export type ActionID = 'MOUSE_UP_DURING_SEEKBAR_SEEKING';
export const ACTION_ID = 'MOUSE_UP_DURING_SEEKBAR_SEEKING';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculateSeekingStatus = (
  seekbarStatus: SeekbarStatus,
  videoStatus: VideoStatus,
  lastRequestedStage: number,
  stageVideoAt: number,
  prevSeekingStatus: SeekingStatus
): SeekingStatus => {
  let seekingStatus = prevSeekingStatus;

  if (seekbarStatus === SeekbarStatus.Idle) return seekingStatus;

  seekingStatus = SeekingStatus.NoSeeking;

  if (
    videoStatus === VideoStatus.Seeking ||
    (lastRequestedStage !== undefined && stageVideoAt !== lastRequestedStage)
  )
    seekingStatus = SeekingStatus.SeekbarSeeking;

  return seekingStatus;
};

const calculateSeekbarStatus = (): SeekbarStatus => SeekbarStatus.Idle;

const partialReducers = [
  createPartialReducer(
    getSeekingStatus,
    setSeekingStatus,
    calculateSeekingStatus,
    [
      getSeekbarStatus,
      getVideoStatus,
      getLastRequestedStage,
      getStageVideoAt,
      getSeekingStatus
    ]
  ),
  createPartialReducer(
    getSeekbarStatus,
    setSeekbarStatus,
    calculateSeekbarStatus
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
