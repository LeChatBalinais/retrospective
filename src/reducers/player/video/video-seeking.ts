import { VIDEO_SEEKING } from '~/actions/player/video/video-seeking';
import { State, VideoSeeking, VideoStatus } from '~/types';
import { getVideoDuration } from '~/selectors/selectors';

const videoSeeking = (
  state: State,
  { payload: { time: toTime } }: VideoSeeking
): State => {
  const { player } = state;

  const { video } = player;

  const { status, stageSeekingTo } = video;

  const toStage = toTime / getVideoDuration(state);

  if (status === VideoStatus.Seeking && stageSeekingTo === toStage)
    return state;

  return {
    ...state,
    player: {
      ...player,
      video: {
        ...video,
        status: VideoStatus.Seeking,
        stageSeekingTo: toStage
      }
    }
  };
};

export default {
  actionType: VIDEO_SEEKING,
  reducer: videoSeeking
};
