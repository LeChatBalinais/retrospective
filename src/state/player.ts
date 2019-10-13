export interface Player {
  readonly playbackStatus: PlaybackStatus;
  readonly seekingStatus: SeekingStatus;
  readonly lastRequestedStage: number;
  readonly video?: {
    status: VideoStatus;
    stageAt?: number;
    stageSeekingTo?: number;
  };
  readonly seekPreview?: {
    status: VideoStatus;
    stageAt?: number;
    stageSeekingTo?: number;
  };
  readonly seekbar: {
    status: SeekbarStatus;
  };
}

export enum VideoStatus {
  Paused,
  Playing,
  Seeking
}

export enum PlaybackStatus {
  Paused,
  Playing
}

export enum SeekingStatus {
  NoSeeking,
  SeekbarSeeking,
  Seeking
}

export enum SeekbarStatus {
  Idle,
  Seeking
}
