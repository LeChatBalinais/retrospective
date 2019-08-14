import { State } from '../types/state';
import { SetPlayback, SET_PLAYBACK } from '../actions/set-playback';
import { SimpleAction } from '../types/types';

const setPlayback = (state: State, action: SimpleAction): State => {
  const {
    payload: { playback }
  } = action as SetPlayback;

  return {
    ...state,
    player: {
      ...state.player,
      playback
    }
  };
};

export default { actionType: SET_PLAYBACK, reducer: setPlayback };
