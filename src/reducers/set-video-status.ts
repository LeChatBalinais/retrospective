import { State, SetVideoStatus, VideoStatus } from '../types';
import { SET_VIDEO_STATUS } from '../actions/set-video-status';

const setUserSeek = (state: State, action: SetVideoStatus): State => {
  const {
    payload: { status }
  } = action;

  const {
    player: {
      video: {
        status: prevStatus,
        atStage: prevAtStage,
        stageSeekingTo: prevStageSeekingTo
      }
    }
  } = state;

  let atStage = prevAtStage;
  let stageSeekingTo = prevStageSeekingTo;

  if (prevStatus === VideoStatus.Seeking && status !== VideoStatus.Seeking) {
    atStage = prevStageSeekingTo;
    stageSeekingTo = undefined;
  }

  return {
    ...state,
    player: {
      ...state.player,
      video: {
        ...state.player.video,
        atStage,
        status,
        stageSeekingTo
      }
    }
  };
};

const actionTypeReducerPair = {
  actionType: SET_VIDEO_STATUS,
  reducer: setUserSeek
};

export default actionTypeReducerPair;
