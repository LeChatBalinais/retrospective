/* eslint-disable @typescript-eslint/no-explicit-any */

type Selector<S, P, A> = (state?: S, payload?: P) => A;

export function createPartialReducer<S, V>(
  getReducedVal: (state: S) => V,
  setReducedVal: (state: S, val: V) => S,
  calculateReducedVal: () => V
): (initialState: S, currentState: S) => S;

export function createPartialReducer<S, V, P, A1>(
  getReducedVal: (state: S, payload?: P) => V,
  setReducedVal: (state: S, val: V, payload?: P) => S,
  calculateReducedVal: (arg1: A1) => V,
  selectors: [Selector<S, P, A1>]
): (initialState: S, currentState: S, payload: P) => S;

export function createPartialReducer<S, V, P, A1, A2>(
  getReducedVal: (state: S, payload?: P) => V,
  setReducedVal: (state: S, val: V, payload?: P) => S,
  calculateReducedVal: (arg1: A1, arg2: A2) => V,
  selectors: [Selector<S, P, A1>, Selector<S, P, A2>]
): (initialState: S, currentState: S, payload: P) => S;

export function createPartialReducer<S, V, P, A1, A2, A3>(
  getReducedVal: (state: S, payload?: P) => V,
  setReducedVal: (state: S, val: V, payload?: P) => S,
  calculateReducedVal: (arg1: A1, arg2: A2, arg3: A3) => V,
  selectors: [Selector<S, P, A1>, Selector<S, P, A2>, Selector<S, P, A3>]
): (initialState: S, currentState: S, payload: P) => S;

export function createPartialReducer<S, V, P, A1, A2, A3, A4>(
  getReducedVal: (state: S, payload?: P) => V,
  setReducedVal: (state: S, val: V, payload?: P) => S,
  calculateReducedVal: (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => V,
  selectors: [
    Selector<S, P, A1>,
    Selector<S, P, A2>,
    Selector<S, P, A3>,
    Selector<S, P, A4>
  ]
): (initialState: S, currentState: S, payload: P) => S;

export function createPartialReducer<S, V, P, A1, A2, A3, A4, A5>(
  getReducedVal: (state: S, payload?: P) => V,
  setReducedVal: (state: S, val: V, payload?: P) => S,
  calculateReducedVal: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => V,
  selectors: [
    Selector<S, P, A1>,
    Selector<S, P, A2>,
    Selector<S, P, A3>,
    Selector<S, P, A4>,
    Selector<S, P, A5>
  ]
): (initialState: S, currentState: S, payload: P) => S;

export function createPartialReducer<S, V, P>(
  getReducedVal: (state: S, payload?: P) => V,
  setReducedVal: (state: S, val: V, payload?: P) => S,
  calculateReducedVal: (...args: any[]) => V,
  selectors?: ((state?: S, payload?: P) => any)[]
): (initialState: S, currentState: S, payload?: P) => S {
  return (initialState: S, currentState: S, payload?: P): S => {
    let val;
    if (!selectors) val = calculateReducedVal();
    else {
      const args = [];
      selectors.forEach((selector: (state: S, payload: P) => any): void => {
        args.push(selector(initialState, payload));
      });

      val = calculateReducedVal(...args);
    }

    if (getReducedVal(initialState, payload) === val) return currentState;

    return setReducedVal(currentState, val, payload);
  };
}

export const getDefaultReducedVal = (): undefined => undefined;
