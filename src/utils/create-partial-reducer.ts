import { Determiner } from './map-state-to-determiner';

type Selector<S, P, A> = (state?: S, payload?: P) => A;

export type SubReducer<S, P = undefined> = (
  initialState: S,
  currentState: S,
  payload: P
) => S;

export function createPartialReducer<S, V>(
  getReducedVal: (state: S) => V,
  setReducedVal: (state: S, val: V) => S,
  determiner: Determiner<S, V>
): SubReducer<S>;

export function createPartialReducer<S, V, P = undefined>(
  getReducedVal: (state: S, payload?: P) => V,
  setReducedVal: (state: S, val: V, payload?: P) => S,
  determiner: Determiner<S, V, P>
): SubReducer<S, P> {
  return (initialState: S, currentState: S, payload?: P): S => {
    const val = determiner(initialState, payload);

    if (getReducedVal(initialState, payload) === val) return currentState;

    return setReducedVal(currentState, val, payload);
  };
}
