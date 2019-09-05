export interface Player {
  readonly playbackStatus: PlaybackStatus;
  readonly seekingStatus: SeekingStatus;
  readonly seekBarAtStage: number;
  readonly video?: {
    status: VideoStatus;
    atStage?: number;
    stageSeekingTo?: number;
  };
}

export enum VideoStatus {
  Paused,
  Seeking,
  Playing
}

export enum PlaybackStatus {
  Paused,
  Playing
}

export enum SeekingStatus {
  Idle,
  Seeking
}
