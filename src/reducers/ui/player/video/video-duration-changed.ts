import {
  VIDEO_DURATION_CHANGED,
  VideoDurationChangedPayload,
  VideoDurationChangedType
} from '~/actions';
import { State } from '~/types';
import { getVideoDuration } from '~/selectors/selectors';
import { setVideoDuration, setStageVideoAt } from '~/reducers/base';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import createReducer from '~/utils/create-reducer';
import { getStageVideoAt } from '~/selectors/common';

const getDuration = (
  state: State,
  { duration }: VideoDurationChangedPayload
): number => duration;

const calculateDuration = (duration: number): number => duration;

const calculateStageVideoAt = (): number => 0;

const partialReducers = [
  createPartialReducer(getVideoDuration, setVideoDuration, calculateDuration, [
    getDuration
  ]),
  createPartialReducer(getStageVideoAt, setStageVideoAt, calculateStageVideoAt)
];

export default {
  actionType: VIDEO_DURATION_CHANGED,
  reducer: createReducer<
    VideoDurationChangedType,
    State,
    VideoDurationChangedPayload
  >(partialReducers)
};
