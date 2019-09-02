import { SET_DURATION } from '../actions/set-duration';
import { State, SetDuration } from '../types';

const setDuration = (state: State, action: SetDuration): State => {
  const {
    payload: { duration }
  } = action;
  return {
    ...state,
    player: {
      ...state.player,
      video: { ...state.player.video, atStage: 0 }
    },
    footage: {
      ...state.footage,
      duration
    }
  };
};

export default { actionType: SET_DURATION, reducer: setDuration };
