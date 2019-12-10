import { ElementsByID } from './table';
import { GlobalEntityTable } from './global-entity-table';

export interface Tag {
  readonly videoID: string;
  readonly path: PlaneTimePoint[];
}

export interface PlaneTimePoint {
  time: number;
  x: number;
  y: number;
}
export type Tags = GlobalEntityTable<Tag>;

export type TagsByID = ElementsByID<Tag>;
