import { State } from '../types/state';
import { SetUserSeek } from '../types/action';

const setUserSeek = (state: State, action: SetUserSeek): State => {
  const { payload: on } = action;
  return {
    ...state,
    superVideoState: {
      ...state.superVideoState,
      userSeek: on
    }
  };
};

export default setUserSeek;
