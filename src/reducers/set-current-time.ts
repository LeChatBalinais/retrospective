import { State } from '../types/state';
import { SetCurrentTime } from '../types/action';

const setCurrentTime = (state: State, action: SetCurrentTime): State => {
  const { payload: currentTime } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      currentTime
    }
  };
};

export default setCurrentTime;
