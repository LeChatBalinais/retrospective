import { VIDEO_SEEKING } from '~/actions';
import { State, VideoSeekingPayload, VideoStatus } from '~/types';
import createReducer from '~/utils/create-reducer';
import { getVideoStatus, getStageVideoSeekingTo } from '~/selectors/common';
import { getVideoDuration } from '~/selectors/selectors';
import { setVideoStatus, setStageVideoSeekingTo } from '~/reducers/base';
import { createPartialReducer } from '~/utils/create-partial-reducer';

const getToTime = (state: State, { time }: VideoSeekingPayload): number => time;

const calculateVideoStatus = (): VideoStatus => VideoStatus.Seeking;

const calculateStageVideoSeekingTo = ([duration, toTime]: [
  number,
  number
]): number => toTime / duration;

const subReducers = [
  createPartialReducer(getVideoStatus, setVideoStatus, calculateVideoStatus),
  createPartialReducer(
    getStageVideoSeekingTo,
    setStageVideoSeekingTo,
    calculateStageVideoSeekingTo,
    [getVideoDuration, getToTime]
  )
];

export default {
  actionType: VIDEO_SEEKING,
  reducer: createReducer<State, VideoSeekingPayload>(subReducers)
};
