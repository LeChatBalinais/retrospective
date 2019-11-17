import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { VideoStatus, SeekingStatus, SeekbarStatus } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import {
  getVideoStatus,
  getStageVideoAt,
  getStageVideoSeekingTo,
  getSeekingStatus,
  getLastRequestedStage,
  getSeekbarStatus,
  getSeekVideo,
  getSeekPreviewStatus,
  isDelayOn
} from '~/getters/player';
import {
  setStageVideoAt,
  setSeekingStatus,
  setLastRequestedStage,
  setVideoStatus,
  setStageVideoSeekingTo,
  setSeekVideo
} from '~/setters/player';
import { timeIsCloseEnough } from '~/utils/time-is-close-enough';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'UI_PLAYER_VIDEO_SEEKED';
export const ACTION_ID = 'UI_PLAYER_VIDEO_SEEKED';

export type Payload = undefined;
export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const getNewStageVideoAt = (stageVideoSeekingTo: number): number =>
  stageVideoSeekingTo;

const getNewSeekingStatus = (
  stageVideoSeekingTo: number,
  lastRequestedStage: number,
  seekbarStatus: SeekbarStatus,
  prevSeekingStatus: SeekingStatus
): SeekingStatus =>
  timeIsCloseEnough(stageVideoSeekingTo, lastRequestedStage) &&
  seekbarStatus === SeekbarStatus.Idle
    ? SeekingStatus.NoSeeking
    : prevSeekingStatus;

const getNewLastRequestedStage = (
  stageVideoSeekingTo: number,
  prevLastRequestedStage: number
): number =>
  timeIsCloseEnough(stageVideoSeekingTo, prevLastRequestedStage)
    ? undefined
    : prevLastRequestedStage;

const getNewVideoStatus = (): VideoStatus => VideoStatus.Paused;

const getNewStageVideoSeekingTo = (): number => undefined;

const getNewSeekVideo = (
  stageVideoSeekingTo: number,
  seekPreviewStatus: VideoStatus,
  prevLastRequestedStage: number,
  delayIsOn: boolean
): boolean =>
  !timeIsCloseEnough(stageVideoSeekingTo, prevLastRequestedStage) &&
  seekPreviewStatus !== VideoStatus.Seeking &&
  !delayIsOn;

export const reducer = createReducer(ACTION_ID, [
  [
    getStageVideoSeekingTo,
    setStageVideoSeekingTo,
    mapStateToDeterminer(getNewStageVideoSeekingTo)
  ],
  [getVideoStatus, setVideoStatus, mapStateToDeterminer(getNewVideoStatus)],
  [
    getLastRequestedStage,
    setLastRequestedStage,
    mapStateToDeterminer(getNewLastRequestedStage, [
      getStageVideoSeekingTo,
      getLastRequestedStage
    ])
  ],
  [
    getSeekingStatus,
    setSeekingStatus,
    mapStateToDeterminer(getNewSeekingStatus, [
      getStageVideoSeekingTo,
      getLastRequestedStage,
      getSeekbarStatus,
      getSeekingStatus
    ])
  ],
  [
    getStageVideoAt,
    setStageVideoAt,
    mapStateToDeterminer(getNewStageVideoAt, [getStageVideoSeekingTo])
  ],
  [
    getSeekVideo,
    setSeekVideo,
    mapStateToDeterminer(getNewSeekVideo, [
      getStageVideoSeekingTo,
      getSeekPreviewStatus,
      getLastRequestedStage,
      isDelayOn
    ])
  ]
]);
