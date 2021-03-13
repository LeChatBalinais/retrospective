export interface ActionTemplate<T, P = undefined> {
  type: T;
  payload: P;
}
