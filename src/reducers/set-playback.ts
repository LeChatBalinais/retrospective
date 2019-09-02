import { SET_PLAYBACK } from '../actions/set-playback';
import { State, SimpleAction, SetPlayback, PlayerStatus } from '../types';

const setPlayback = (state: State, action: SimpleAction): State => {
  const {
    payload: { playback }
  } = action as SetPlayback;

  let status: PlayerStatus = PlayerStatus.Paused;

  if (playback) status = PlayerStatus.Playing;

  return {
    ...state,
    player: {
      ...state.player,
      status
    }
  };
};

export default { actionType: SET_PLAYBACK, reducer: setPlayback };
