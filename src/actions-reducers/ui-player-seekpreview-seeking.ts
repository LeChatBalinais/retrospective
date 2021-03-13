import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, VideoStatus } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import {
  getSeekPreviewStatus,
  getStageSeekPreviewSeekingTo,
  getVideoDuration
} from '~/getters/player';
import {
  setSeekPreviewStatus,
  setStageSeekPreviewSeekingTo
} from '~/setters/player';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'UI_PLAYER_SEEKPREVIEW_SEEKING';
export const ACTION_ID: ActionID = 'UI_PLAYER_SEEKPREVIEW_SEEKING';

export interface Payload {
  time: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getToTime = (state: State, { time }: Payload): number => time;

const getNewSeekPreviewStatus = (): VideoStatus => VideoStatus.Seeking;

const getNewStageSeekPreviewSeekingTo = (
  duration: number,
  toTime: number
): number => toTime / duration;

export const reducer = createReducer(ACTION_ID, [
  [
    getSeekPreviewStatus,
    setSeekPreviewStatus,
    mapStateToDeterminer(getNewSeekPreviewStatus)
  ],
  [
    getStageSeekPreviewSeekingTo,
    setStageSeekPreviewSeekingTo,
    mapStateToDeterminer(getNewStageSeekPreviewSeekingTo, [
      getVideoDuration,
      getToTime
    ])
  ]
]);
