import { State, VideoStatus } from '../types';
import { SetUserSeek, SET_USER_SEEK } from '../actions/set-user-seek';

const setUserSeek = (state: State, action: SetUserSeek): State => {
  const {
    payload: { mode: on }
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

  if (!on) {
    atStage = stageSeekTo;
  }

  let status: VideoStatus = VideoStatus.Playing;

  if (on) status = VideoStatus.Seeking;

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

export default { actionType: SET_USER_SEEK, reducer: setUserSeek };
