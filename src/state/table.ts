export interface Table<E> {
  readonly byID: ElementsByID<E>;
  readonly allIDs: string[];
}

export interface ElementsByID<E> {
  [ID: string]: E;
}
