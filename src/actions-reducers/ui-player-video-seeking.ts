import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, VideoStatus } from '~/state';
import { createReducer } from '~/utils/experimental/create-reducer';
import { getVideoStatus, getStageVideoSeekingTo } from '~/getters/player';
import { getVideoDuration } from '~/getters/footage';
import { setVideoStatus, setStageVideoSeekingTo } from '~/setters/player';
import { mapStateToDeterminer } from '~/utils/experimental/map-state-to-determiner';

export type ActionID = 'UI_PLAYER_VIDEO_SEEKING';
export const ACTION_ID: ActionID = 'UI_PLAYER_VIDEO_SEEKING';

export interface Payload {
  time: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getToTime = (state: State, { time }: Payload): number => time;

const getNewVideoStatus = (): VideoStatus => VideoStatus.Seeking;

const getNewStageVideoSeekingTo = (duration: number, toTime: number): number =>
  toTime / duration;

export const reducer = createReducer(ACTION_ID, [
  [getVideoStatus, setVideoStatus, mapStateToDeterminer(getNewVideoStatus)],
  [
    getStageVideoSeekingTo,
    setStageVideoSeekingTo,
    mapStateToDeterminer(getNewStageVideoSeekingTo, [
      getVideoDuration,
      getToTime
    ])
  ]
]);
