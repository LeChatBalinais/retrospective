import { SET_CURRENT_STAGE } from '../actions/set-current-stage';

import { State, SetCurrentStage } from '../types';

const setCurrentStage = (state: State, action: SetCurrentStage): State => {
  const {
    payload: { time: atStage }
  } = action;

  return {
    ...state,
    player: {
      ...state.player,
      video: { ...state.player.video, atStage, stageSeekTo: atStage }
    }
  };
};

export default {
  actionType: SET_CURRENT_STAGE,
  reducer: setCurrentStage
};
