export interface Table<E> {
  readonly byID: { [ID: string]: E };
  readonly allIDs: string[];
}
