import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, SeekbarStatus, SeekingStatus } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';
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
import { timeIsCloseEnough } from '~/utils/time-is-close-enough';

export type ActionID = 'MOUSE_DOWN_ON_SEEK_BAR';
export const ACTION_ID = 'MOUSE_DOWN_ON_SEEK_BAR';

export interface Payload {
  position: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getPosition = (state: State, { position }: Payload): number => position;

const getNewLastRequestedStage = (
  position: number,
  seekbarStatus: SeekbarStatus,
  seekingStatus: SeekingStatus,
  prevLastRequestedStage: number
): number => {
  return seekbarStatus === SeekbarStatus.Seeking &&
    timeIsCloseEnough(prevLastRequestedStage, position) &&
    seekingStatus === SeekingStatus.SeekbarSeeking
    ? prevLastRequestedStage
    : position;
};

const getNewSeekingStatus = (
  position: number,
  seekbarStatus: SeekbarStatus,
  lastRequestedStage: number,
  prevSeekingStatus: SeekingStatus
): SeekingStatus => {
  return seekbarStatus === SeekbarStatus.Seeking &&
    timeIsCloseEnough(lastRequestedStage, position) &&
    prevSeekingStatus === SeekingStatus.SeekbarSeeking
    ? prevSeekingStatus
    : SeekingStatus.SeekbarSeeking;
};

const getNewSeekbarStatus = (
  position: number,
  lastRequestedStage: number,
  seekingStatus: SeekingStatus,
  prevSeekbarStatus: SeekbarStatus
): SeekbarStatus => {
  return prevSeekbarStatus === SeekbarStatus.Seeking &&
    timeIsCloseEnough(lastRequestedStage, position) &&
    seekingStatus === SeekingStatus.SeekbarSeeking
    ? prevSeekbarStatus
    : SeekbarStatus.Seeking;
};

export const reducer = createReducer(ACTION_ID, [
  [
    getLastRequestedStage,
    setLastRequestedStage,
    mapStateToDeterminer(getNewLastRequestedStage, [
      getPosition,
      getSeekbarStatus,
      getSeekingStatus,
      getLastRequestedStage
    ])
  ],
  [
    getSeekingStatus,
    setSeekingStatus,
    mapStateToDeterminer(getNewSeekingStatus, [
      getPosition,
      getSeekbarStatus,
      getLastRequestedStage,
      getSeekingStatus
    ])
  ],
  [
    getSeekbarStatus,
    setSeekbarStatus,
    mapStateToDeterminer(getNewSeekbarStatus, [
      getPosition,
      getLastRequestedStage,
      getSeekingStatus,
      getSeekbarStatus
    ])
  ]
]);
