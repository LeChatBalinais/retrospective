export interface Player {
  readonly status: PlayerStatus;
  readonly video?: {
    status: VideoStatus;
    atStage?: number;
    stageSeekTo?: number;
  };
}

export enum VideoStatus {
  Paused,
  Seeking,
  Playing
}

export enum PlayerStatus {
  Paused,
  Playing
}
