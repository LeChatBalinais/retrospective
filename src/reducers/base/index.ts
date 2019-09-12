import { VideoStatus, State } from '~/types';

export const setVideoStatus = (state: State, status: VideoStatus): State => ({
  ...state,
  player: {
    ...state.player,
    video: {
      ...state.player.video,
      status
    }
  }
});

export const setStageVideoSeekingTo = (
  state: State,
  stageSeekingTo: number
): State => ({
  ...state,
  player: {
    ...state.player,
    video: {
      ...state.player.video,
      stageSeekingTo
    }
  }
});
