import { VIDEO_PLAYED_TO_TIME } from '~/actions';
import { State, VideoSeeking } from '~/types';

const videoPlayedToTime = (
  state: State,
  { payload: { time: toTime } }: VideoSeeking
): State => {
  const {
    footage: { duration }
  } = state;

  return {
    ...state,
    player: {
      ...state.player,
      video: {
        ...state.player.video,
        stageAt: toTime / duration
      }
    }
  };
};

export default {
  actionType: VIDEO_PLAYED_TO_TIME,
  reducer: videoPlayedToTime
};
