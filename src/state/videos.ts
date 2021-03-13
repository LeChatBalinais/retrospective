import { Table, ElementsByID } from './table';

export interface Video {
  readonly globalID: string;
  readonly name: string;
}

export type Videos = Table<Video>;

export type VideosByID = ElementsByID<Video>;
