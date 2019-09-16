import {
  MOUSE_DOWN_ON_SEEK_BAR,
  MouseDownOnSeekBarPayload,
  MouseDownOnSeekBarType
} from '~/actions';
import { State, SeekbarStatus, SeekingStatus } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getLastRequestedStage,
  getSeekbarStatus,
  getSeekingStatus
} from '~/selectors/common';
import {
  setLastRequestedStage,
  setSeekingStatus,
  setSeekbarStatus
} from '~/reducers/base';

const getPosition = (
  state: State,
  { position }: MouseDownOnSeekBarPayload
): number => position;

const calculateLastRequestedStage = (
  position: number,
  seekbarStatus: SeekbarStatus,
  seekingStatus: SeekingStatus,
  prevLastRequestedStage: number
): number => {
  return seekbarStatus === SeekbarStatus.Seeking &&
    prevLastRequestedStage === position &&
    seekingStatus === SeekingStatus.SeekbarSeeking
    ? prevLastRequestedStage
    : position;
};

const calculateSeekingStatus = (
  position: number,
  seekbarStatus: SeekbarStatus,
  lastRequestedStage: number,
  prevSeekingStatus: SeekingStatus
): SeekingStatus => {
  return seekbarStatus === SeekbarStatus.Seeking &&
    lastRequestedStage === position &&
    prevSeekingStatus === SeekingStatus.SeekbarSeeking
    ? prevSeekingStatus
    : SeekingStatus.SeekbarSeeking;
};

const calculateSeekbarStatus = (
  position: number,
  lastRequestedStage: number,
  seekingStatus: SeekingStatus,
  prevSeekbarStatus: SeekbarStatus
): SeekbarStatus => {
  return prevSeekbarStatus === SeekbarStatus.Seeking &&
    lastRequestedStage === position &&
    seekingStatus === SeekingStatus.SeekbarSeeking
    ? prevSeekbarStatus
    : SeekbarStatus.Seeking;
};

const partialReducers = [
  createPartialReducer(
    getLastRequestedStage,
    setLastRequestedStage,
    calculateLastRequestedStage,
    [getPosition, getSeekbarStatus, getSeekingStatus, getLastRequestedStage]
  ),
  createPartialReducer(
    getSeekingStatus,
    setSeekingStatus,
    calculateSeekingStatus,
    [getPosition, getSeekbarStatus, getLastRequestedStage, getSeekingStatus]
  ),
  createPartialReducer(
    getSeekbarStatus,
    setSeekbarStatus,
    calculateSeekbarStatus,
    [getPosition, getLastRequestedStage, getSeekingStatus, getSeekbarStatus]
  )
];

export default {
  actionType: MOUSE_DOWN_ON_SEEK_BAR,
  reducer: createReducer<
    MouseDownOnSeekBarType,
    State,
    MouseDownOnSeekBarPayload
  >(partialReducers)
};
