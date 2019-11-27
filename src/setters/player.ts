import {
  State,
  VideoStatus,
  SeekingStatus,
  SeekbarStatus,
  PlaybackStatus
} from '~/state';

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

export const setSeekPreviewStatus = (
  state: State,
  status: VideoStatus
): State => ({
  ...state,
  player: {
    ...state.player,
    seekPreview: {
      ...state.player.seekPreview,
      status
    }
  }
});

export const setStageSeekPreviewSeekingTo = (
  state: State,
  stageSeekingTo: number
): State => ({
  ...state,
  player: {
    ...state.player,
    seekPreview: {
      ...state.player.seekPreview,
      stageSeekingTo
    }
  }
});

export const setStageSeekPreviewAt = (
  state: State,
  stageAt: number
): State => ({
  ...state,
  player: {
    ...state.player,
    seekPreview: {
      ...state.player.seekPreview,
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

export const setSeekVideo = (state: State, seekVideo: boolean): State => ({
  ...state,
  player: {
    ...state.player,
    seekVideo
  }
});

export const setDelayOn = (state: State, delayOn: boolean): State => ({
  ...state,
  player: {
    ...state.player,
    delayOn
  }
});

export const setHighlightedTagID = (state: State, highlightedTagID: string): State => ({
  ...state,
  tagEditor: {
    ...state.tagEditor,
    highlightedTagID
  }
});
