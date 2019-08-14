import { State } from '../types/state';
import { SetDuration, SET_DURATION } from '../actions/set-duration';

const setDuration = (state: State, action: SetDuration): State => {
  const {
    payload: { duration }
  } = action;
  return {
    ...state,
    footage: {
      ...state.footage,
      duration
    }
  };
};

export default { actionType: SET_DURATION, reducer: setDuration };
