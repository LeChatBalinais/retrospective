import { PLAY_BUTTON_CLICKED } from '~/actions';
import { State, PlaybackStatus } from '~/types';

const playButtonClicked = (state: State): State => {
  const { player } = state;

  const { playbackStatus: prevPlaybackStatus } = player;

  let playbackStatus = PlaybackStatus.Playing;

  if (prevPlaybackStatus === PlaybackStatus.Playing)
    playbackStatus = PlaybackStatus.Paused;

  return {
    ...state,
    player: {
      ...player,
      playbackStatus
    }
  };
};

export default {
  actionType: PLAY_BUTTON_CLICKED,
  reducer: playButtonClicked
};
