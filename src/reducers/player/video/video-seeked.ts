import { VIDEO_SEEKED } from '~/actions/player/video/video-seeked';
import { State, VideoStatus, SeekingStatus, SeekbarStatus } from '~/types';

const videoSeeked = (state: State): State => {
  const { player } = state;

  const {
    video,
    lastRequestedStage: prevLastRequestedStage,
    seekbar: { status: seekbarStatus }
  } = player;

  const { status, stageSeekingTo: prevStageSeekingTo } = video;

  if (status !== VideoStatus.Seeking) return state;

  let seekingStatus = SeekingStatus.Seeking;
  let lastRequestedStage = prevLastRequestedStage;

  if (prevLastRequestedStage === prevStageSeekingTo) {
    lastRequestedStage = undefined;
    if (seekbarStatus === SeekbarStatus.Idle)
      seekingStatus = SeekingStatus.NoSeeking;
  }

  return {
    ...state,
    player: {
      ...player,
      video: {
        ...video,
        status: VideoStatus.Paused,
        atStage: prevStageSeekingTo,
        stageSeekingTo: undefined
      },
      seekingStatus,
      lastRequestedStage
    }
  };
};

export default {
  actionType: VIDEO_SEEKED,
  reducer: videoSeeked
};
