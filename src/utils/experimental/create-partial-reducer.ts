/* eslint-disable @typescript-eslint/no-explicit-any */

type Selector<S, P, A> = (state?: S, payload?: P) => A;

export type SubReducer<S, P = undefined> = (
  initialState: S,
  currentState: S,
  payload: P
) => S;

export function createPartialReducer<S, V, P>(
  getReducedVal: (state: S, payload?: P) => V,
  setReducedVal: (state: S, val: V, payload?: P) => S,
  calculateReducedVal: (...args: any[]) => V,
  selectors?: ((state?: S, payload?: P) => any)[]
): SubReducer<S, P> {
  return (initialState: S, currentState: S, payload?: P): S => {
    let val;
    if (!selectors) val = calculateReducedVal();
    else {
      const args = selectors.map(
        (selector: (state: S, payload: P) => any): any =>
          selector(initialState, payload)
      );

      val = calculateReducedVal(...args);
    }

    if (getReducedVal(initialState, payload) === val) return currentState;

    return setReducedVal(currentState, val, payload);
  };
}

export const getDefaultReducedVal = (): undefined => undefined;
