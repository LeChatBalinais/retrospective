import { State } from '../types/state';
import { SetPlayback, SET_PLAYBACK } from '../actions/set-playback';
import { SimpleAction } from '../types/types';

const setPlayback = (state: State, action: SimpleAction): State => {
  const spesificAction = action as SetPlayback;
  const {
    payload: { playback }
  } = spesificAction;

  return {
    ...state,
    player: {
      ...state.player,
      playback
    }
  };
};

export default { actionType: SET_PLAYBACK, reducer: setPlayback };
