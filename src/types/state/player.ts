export interface Player {
  readonly playback: boolean;
  readonly userSeek: boolean;
  readonly currentTimeNormalized: number;
  readonly requestedTimeNormalized: number;
  readonly video?: {
    status: Status;
    atStage?: number;
    stageSeekTo?: number;
  };
}

enum Status {
  Paused,
  Seeking,
  Playing
}
