import { VIDEO_SEEKING } from '~/actions';
import { State, VideoSeekingPayload, VideoStatus } from '~/types';
import createReducer from '~/reducers/create-reducer';
import { getVideoStatus, getStageVideoSeekingTo } from '~/selectors/common';
import { getVideoDuration } from '~/selectors/selectors';
import { setVideoStatus, setStageVideoSeekingTo } from '~/reducers/base';

const videoStatusReducer = (
  initialState: State,
  currentState: State
): State => {
  const status = VideoStatus.Seeking;

  if (status === getVideoStatus(initialState)) return currentState;

  return setVideoStatus(currentState, status);
};

const stageVideoSeekingToReducer = (
  initialState: State,
  currentState: State,
  { time: toTime }: VideoSeekingPayload
): State => {
  const duration = getVideoDuration(initialState);

  const stageSeekingTo = toTime / duration;

  if (stageSeekingTo === getStageVideoSeekingTo(initialState))
    return currentState;

  return setStageVideoSeekingTo(currentState, stageSeekingTo);
};

const subReducers = [videoStatusReducer, stageVideoSeekingToReducer];

export default {
  actionType: VIDEO_SEEKING,
  reducer: createReducer<State, VideoSeekingPayload>(subReducers)
};
