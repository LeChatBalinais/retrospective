import { VIDEO_SEEKED } from '~/actions';
import { State, VideoStatus, SeekingStatus, SeekbarStatus } from '~/types';
import createReducer from '~/utils/create-reducer';
import { getVideoStatus } from '~/selectors/selectors';

const stageVideoAtReducer = (
  initialState: State,
  currentState: State
): State => {
  const {
    player: {
      video: { stageSeekingTo: stageVideoSeekingTo, stageAt: prevAtStage }
    }
  } = initialState;

  const atStage = stageVideoSeekingTo;

  if (atStage === prevAtStage) return currentState;

  return {
    ...currentState,
    player: {
      ...currentState.player,
      video: { ...currentState.player.video, stageAt: atStage }
    }
  };
};

const seekingStatusReducer = (
  initialState: State,
  currentState: State
): State => {
  const {
    player: {
      video: { stageSeekingTo },
      seekingStatus: prevSeekingStatus,
      seekbar: { status: seekbarStatus },
      lastRequestedStage
    }
  } = initialState;

  const seekingStatus =
    stageSeekingTo === lastRequestedStage &&
    seekbarStatus === SeekbarStatus.Idle
      ? SeekingStatus.NoSeeking
      : prevSeekingStatus;

  if (seekingStatus === prevSeekingStatus) return currentState;

  return {
    ...currentState,
    player: {
      ...currentState.player,
      seekingStatus
    }
  };
};

const lastRequestedStageReducer = (
  initialState: State,
  currentState: State
): State => {
  const {
    player: {
      video: { stageSeekingTo },
      lastRequestedStage: prevLastRequestedStage
    }
  } = initialState;

  const lastRequestedStage =
    stageSeekingTo === prevLastRequestedStage
      ? undefined
      : prevLastRequestedStage;

  if (lastRequestedStage === prevLastRequestedStage) return currentState;

  return {
    ...currentState,
    player: {
      ...currentState.player,
      lastRequestedStage
    }
  };
};

const videoStatusReducer = (
  initialState: State,
  currentState: State
): State => {
  const prevStatus = getVideoStatus(initialState);

  const status = VideoStatus.Paused;

  if (status === prevStatus) return currentState;

  return {
    ...currentState,
    player: {
      ...currentState.player,
      video: { ...currentState.player.video, status: VideoStatus.Paused }
    }
  };
};

const stageSeekingToReducer = (
  initialState: State,
  currentState: State
): State => {
  const {
    player: {
      video: { stageSeekingTo: prevStageSeekingTo }
    }
  } = initialState;

  const stageSeekingTo = undefined;

  if (stageSeekingTo === prevStageSeekingTo) return currentState;

  return {
    ...currentState,
    player: {
      ...currentState.player,
      video: { ...currentState.player.video, stageSeekingTo }
    }
  };
};

const subReducers = [
  // createPartialReducer()
  stageSeekingToReducer,
  videoStatusReducer,
  lastRequestedStageReducer,
  seekingStatusReducer,
  stageVideoAtReducer
];

export default {
  actionType: VIDEO_SEEKED,
  reducer: createReducer<State, {}>(subReducers)
};
