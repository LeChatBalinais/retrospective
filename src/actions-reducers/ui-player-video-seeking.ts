import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, VideoStatus } from '~/state';
import createReducer from '~/utils/create-reducer';
import { getVideoStatus, getStageVideoSeekingTo } from '~/selectors/common';
import { getVideoDuration } from '~/selectors/selectors';
import { setVideoStatus, setStageVideoSeekingTo } from '~/reducers/base';
import { createPartialReducer } from '~/utils/create-partial-reducer';

export type ActionID = 'UI_PLAYER_VIDEO_SEEKING';
export const ACTION_ID: ActionID = 'UI_PLAYER_VIDEO_SEEKING';

export interface Payload {
  time: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getToTime = (state: State, { time }: Payload): number => time;

const calculateVideoStatus = (): VideoStatus => VideoStatus.Seeking;

const calculateStageVideoSeekingTo = (
  duration: number,
  toTime: number
): number => toTime / duration;

const partialReducers = [
  createPartialReducer(getVideoStatus, setVideoStatus, calculateVideoStatus),
  createPartialReducer(
    getStageVideoSeekingTo,
    setStageVideoSeekingTo,
    calculateStageVideoSeekingTo,
    [getVideoDuration, getToTime]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
