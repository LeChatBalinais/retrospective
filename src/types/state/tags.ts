import { Table } from './table';

export interface Tag {
  readonly globalID: string;
  readonly path: { time: number; x: number; y: number }[];
}

export type Tags = Table<Tag>;
