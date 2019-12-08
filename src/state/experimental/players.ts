import { Table, ElementsByID } from '../table';

export interface Player {
  readonly videoID: string;
  readonly duration?: number;
  readonly seekVideo?: boolean;
  readonly playbackStatus?: PlaybackStatus;
  readonly lastRequestedStage?: number;
  readonly video?: {
    status: VideoStatus;
    stageAt?: number;
    stageSeekingTo?: number;
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

export type Players = Table<Player>;

export type PlayersByID = ElementsByID<Player>;
