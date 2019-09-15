import { VIDEO_PLAYED_TO_TIME, VideoPlayedToTimePayload } from '~/actions';
import { State } from '~/types';
import createReducer from '~/utils/create-reducer';
import { setStageVideoAt } from '~/reducers/base';
import { getStageVideoAt } from '~/selectors/common';
import { getVideoDuration } from '~/selectors/selectors';
import { createPartialReducer } from '~/utils/create-partial-reducer';

const getTime = (state: State, { time }: VideoPlayedToTimePayload): number =>
  time;

const calculateStageVideoAt = (duration: number, time: number): number =>
  time / duration;

const partialReducers = [
  createPartialReducer(
    getStageVideoAt,
    setStageVideoAt,
    calculateStageVideoAt,
    [getVideoDuration, getTime]
  )
];

export default {
  actionType: VIDEO_PLAYED_TO_TIME,
  reducer: createReducer(partialReducers)
};
