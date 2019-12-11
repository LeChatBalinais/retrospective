import { ElementsByID } from './table';
import { GlobalEntityTable } from './global-entity-table';

export interface Video {
  readonly name: string;
}

export type Videos = GlobalEntityTable<Video>;

export type VideosByID = ElementsByID<Video>;
