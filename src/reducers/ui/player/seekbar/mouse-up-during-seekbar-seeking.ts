import { MOUSE_UP_DURING_SEEKBAR_SEEKING } from '~/actions';
import { SeekbarStatus, SeekingStatus, VideoStatus } from '~/types';
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

export default {
  actionType: MOUSE_UP_DURING_SEEKBAR_SEEKING,
  reducer: createReducer(partialReducers)
};
