/* eslint-disable @typescript-eslint/no-explicit-any */

export type Determiner<S, V, P = undefined> = (
  initialState: S,
  payload: P
) => V;

type Selector<S, P, A> = (state?: S, payload?: P) => A;

export function mapStateToDeterminer<S, V>(
  determineValue: () => V
): Determiner<S, V>;

export function mapStateToDeterminer<S, V, P, A1>(
  determineValue: (arg1: A1) => V,
  selectors: [Selector<S, P, A1>]
): Determiner<S, V, P>;

export function mapStateToDeterminer<S, V, P, A1, A2>(
  determineValue: (arg1: A1, arg2: A2) => V,
  selectors: [Selector<S, P, A1>, Selector<S, P, A2>]
): Determiner<S, V, P>;

export function mapStateToDeterminer<S, V, P, A1, A2, A3>(
  determineValue: (arg1: A1, arg2: A2, arg3: A3) => V,
  selectors: [Selector<S, P, A1>, Selector<S, P, A2>, Selector<S, P, A3>]
): Determiner<S, V, P>;

export function mapStateToDeterminer<S, V, P, A1, A2, A3, A4>(
  determineValue: (arg1: A1, arg2: A2, arg3: A3, arg4: A4) => V,
  selectors: [
    Selector<S, P, A1>,
    Selector<S, P, A2>,
    Selector<S, P, A3>,
    Selector<S, P, A4>
  ]
): Determiner<S, V, P>;

export function mapStateToDeterminer<S, V, P, A1, A2, A3, A4, A5>(
  determineValue: (arg1: A1, arg2: A2, arg3: A3, arg4: A4, arg5: A5) => V,
  selectors: [
    Selector<S, P, A1>,
    Selector<S, P, A2>,
    Selector<S, P, A3>,
    Selector<S, P, A4>,
    Selector<S, P, A5>
  ]
): Determiner<S, V, P>;

export function mapStateToDeterminer<S, V, P>(
  determineValue: (...args: any[]) => V,
  selectors?: ((state?: S, payload?: P) => any)[]
): (state?: S, payload?: P) => V {
  return (state?: S, payload?: P): V => {
    let val: V;
    if (!selectors) val = determineValue();
    else {
      const args = selectors.map(
        (selector: (state: S, payload: P) => any): any =>
          selector(state, payload)
      );

      val = determineValue(...args);
    }
    return val;
  };
}
