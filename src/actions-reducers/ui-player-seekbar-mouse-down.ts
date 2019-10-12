import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, SeekbarStatus, SeekingStatus } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import {
  getLastRequestedStage,
  getSeekbarStatus,
  getSeekingStatus
} from '~/getters/player';
import {
  setLastRequestedStage,
  setSeekingStatus,
  setSeekbarStatus
} from '~/setters/player';

export type ActionID = 'MOUSE_DOWN_ON_SEEK_BAR';
export const ACTION_ID = 'MOUSE_DOWN_ON_SEEK_BAR';

export interface Payload {
  position: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getPosition = (state: State, { position }: Payload): number => position;

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

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
