import { GlobalEntity } from './global-entity';
import { Table } from './table';

export type GlobalEntityTable<T> = Table<T> & GlobalEntity;
