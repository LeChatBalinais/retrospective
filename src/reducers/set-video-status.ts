import { State, SetVideoStatus, VideoStatus } from '../types';
import { SET_VIDEO_STATUS } from '../actions/set-video-status';

const setUserSeek = (state: State, action: SetVideoStatus): State => {
  const {
    payload: { status }
  } = action;

  const {
    player: {
      video: { stageSeekTo }
    }
  } = state;

  let {
    player: {
      video: { atStage }
    }
  } = state;

  if (status !== VideoStatus.Seeking) {
    atStage = stageSeekTo;
  }

  return {
    ...state,
    player: {
      ...state.player,
      video: {
        ...state.player.video,
        status,
        atStage
      }
    }
  };
};

const actionTypeReducerPair = {
  actionType: SET_VIDEO_STATUS,
  reducer: setUserSeek
};

export default actionTypeReducerPair;
