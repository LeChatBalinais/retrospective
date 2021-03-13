import { Table, ElementsByID } from './table';

export interface Player {
  readonly videoID: string;
  readonly duration: number;
  readonly delayOn: boolean;
  readonly seekVideo: boolean;
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

export type Players = Table<Player>;

export type PlayersByID = ElementsByID<Player>;
