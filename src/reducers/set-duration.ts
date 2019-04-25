import { State } from '../types/state';
import { SetDuration } from '../types/action';

const setDuration = (state: State, action: SetDuration): State => {
  const { payload: duration } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      duration
    }
  };
};

export default setDuration;
