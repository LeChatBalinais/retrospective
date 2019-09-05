import { SET_CURRENT_STAGE } from '../actions/set-current-stage';

import { State, SetCurrentStage, VideoStatus } from '../types';

const setCurrentStage = (state: State, action: SetCurrentStage): State => {
  const {
    payload: { time: atStage }
  } = action;

  const {
    player: {
      video: { status }
    }
  } = state;

  if (status === VideoStatus.Seeking) return state;

  return {
    ...state,
    player: {
      ...state.player,
      video: { ...state.player.video, atStage }
    }
  };
};

export default {
  actionType: SET_CURRENT_STAGE,
  reducer: setCurrentStage
};
