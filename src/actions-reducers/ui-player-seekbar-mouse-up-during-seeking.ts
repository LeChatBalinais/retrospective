import { ActionTemplate } from '~/utils/action-template';
import { SeekbarStatus, SeekingStatus, VideoStatus } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import {
  getSeekingStatus,
  getSeekbarStatus,
  getVideoStatus,
  getLastRequestedStage,
  getStageVideoAt
} from '~/getters/player';
import { setSeekingStatus, setSeekbarStatus } from '~/setters/player';
import { makeActionCreator } from '~/utils/make-action-creator';
import { timeIsCloseEnough } from '~/utils/time-is-close-enough';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'MOUSE_UP_DURING_SEEKBAR_SEEKING';
export const ACTION_ID = 'MOUSE_UP_DURING_SEEKBAR_SEEKING';

export type Payload = undefined;

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const getNewSeekingStatus = (
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
    (lastRequestedStage !== undefined &&
      !timeIsCloseEnough(stageVideoAt, lastRequestedStage))
  )
    seekingStatus = SeekingStatus.SeekbarSeeking;

  return seekingStatus;
};

const getNewSeekbarStatus = (): SeekbarStatus => SeekbarStatus.Idle;

export const reducer = createReducer(ACTION_ID, [
  [
    getSeekingStatus,
    setSeekingStatus,
    mapStateToDeterminer(getNewSeekingStatus, [
      getSeekbarStatus,
      getVideoStatus,
      getLastRequestedStage,
      getStageVideoAt,
      getSeekingStatus
    ])
  ],
  [
    getSeekbarStatus,
    setSeekbarStatus,
    mapStateToDeterminer(getNewSeekbarStatus)
  ]
]);
