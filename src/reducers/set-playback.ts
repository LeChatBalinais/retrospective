import { SET_PLAYBACK } from '../actions/set-playback';
import { State, SimpleAction, SetPlayback, PlaybackStatus } from '../types';

const setPlayback = (state: State, action: SimpleAction): State => {
  const {
    payload: { playback }
  } = action as SetPlayback;

  let status: PlaybackStatus = PlaybackStatus.Paused;

  if (playback) status = PlaybackStatus.Playing;

  return {
    ...state,
    player: {
      ...state.player,
      playbackStatus: status
    }
  };
};

export default { actionType: SET_PLAYBACK, reducer: setPlayback };
