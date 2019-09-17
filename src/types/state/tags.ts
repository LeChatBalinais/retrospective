import { Table, ElementsByID } from './table';

export interface Tag {
  readonly globalID: string;
  readonly path: PlaneTimePoint[];
}

export interface PlaneTimePoint {
  time: number;
  x: number;
  y: number;
}
export type Tags = Table<Tag>;

export type TagsByID = ElementsByID<Tag>;
