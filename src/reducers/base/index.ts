import {
  VideoStatus,
  State,
  SeekingStatus,
  PlaybackStatus,
  SeekbarStatus
} from '~/types';

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

export const setStageVideoAt = (state: State, stageAt: number): State => ({
  ...state,
  player: {
    ...state.player,
    video: {
      ...state.player.video,
      stageAt
    }
  }
});

export const setSeekingStatus = (
  state: State,
  seekingStatus: SeekingStatus
): State => ({
  ...state,
  player: {
    ...state.player,
    seekingStatus
  }
});

export const setSeekbarStatus = (
  state: State,
  status: SeekbarStatus
): State => ({
  ...state,
  player: {
    ...state.player,
    seekbar: {
      ...state.player.seekbar,
      status
    }
  }
});

export const setPlaybackStatus = (
  state: State,
  playbackStatus: PlaybackStatus
): State => ({
  ...state,
  player: {
    ...state.player,
    playbackStatus
  }
});

export const setLastRequestedStage = (
  state: State,
  lastRequestedStage: number
): State => ({
  ...state,
  player: {
    ...state.player,
    lastRequestedStage
  }
});

export const setVideoDuration = (state: State, duration: number): State => ({
  ...state,
  footage: { ...state.footage, duration }
});

export const setCurrentTagID = (state: State, currentTag: string): State => ({
  ...state,
  tagEditor: { ...state.tagEditor, currentTag }
});
