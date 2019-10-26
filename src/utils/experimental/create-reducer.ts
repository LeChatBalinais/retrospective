/* eslint-disable @typescript-eslint/no-explicit-any */
import { SubReducer, createPartialReducer } from './create-partial-reducer';
import { Determiner } from './map-state-to-determiner';

type Reducer<T, S, P> = (state: S, action: { type: T; payload: P }) => S;

type ReducerComponents<S, V, P = undefined> = [
  (state: S, payload?: P) => V,
  (state: S, val: V, payload?: P) => S,
  Determiner<S, V, P>
];

function createReducerPrivate<T, S, P = undefined>(
  reducers: SubReducer<S, P>[]
): Reducer<T, S, P> {
  return (state: S, { payload }: { type: T; payload: P }): S => {
    let newState = state;
    newState = reducers.reduce(
      (intermediateState: S, reducer: SubReducer<S, P>): S =>
        reducer(state, intermediateState, payload),
      newState
    );
    return newState;
  };
}

export function createReducer<T extends string, S, P, V1>(
  ACTION_ID: T,
  reducersComponents: [ReducerComponents<S, P, V1>]
): Record<T, Reducer<T, S, P>>;

export function createReducer<T extends string, S, P, V1, V2>(
  ACTION_ID: T,
  reducersComponents: [ReducerComponents<S, V1, P>, ReducerComponents<S, V2, P>]
): Record<T, Reducer<T, S, P>>;

export function createReducer<T extends string, S, P, V1, V2, V3>(
  ACTION_ID: T,
  reducersComponents: [
    ReducerComponents<S, V1, P>,
    ReducerComponents<S, V2, P>,
    ReducerComponents<S, V3, P>
  ]
): Record<T, Reducer<T, S, P>>;

export function createReducer<T extends string, S, P, V1, V2, V3, V4>(
  ACTION_ID: T,
  reducersComponents: [
    ReducerComponents<S, V1, P>,
    ReducerComponents<S, V2, P>,
    ReducerComponents<S, V3, P>,
    ReducerComponents<S, V4, P>
  ]
): Record<T, Reducer<T, S, P>>;

export function createReducer<T extends string, S, P, V1, V2, V3, V4, V5>(
  ACTION_ID: T,
  reducersComponents: [
    ReducerComponents<S, V1, P>,
    ReducerComponents<S, V2, P>,
    ReducerComponents<S, V3, P>,
    ReducerComponents<S, V4, P>,
    ReducerComponents<S, V5, P>
  ]
): Record<T, Reducer<T, S, P>>;

export function createReducer<T extends string, S, P, V1, V2, V3, V4, V5, V6>(
  ACTION_ID: T,
  reducersComponents: [
    ReducerComponents<S, V1, P>,
    ReducerComponents<S, V2, P>,
    ReducerComponents<S, V3, P>,
    ReducerComponents<S, V4, P>,
    ReducerComponents<S, V5, P>,
    ReducerComponents<S, V6, P>
  ]
): Record<T, Reducer<T, S, P>>;

export function createReducer<
  T extends string,
  S,
  P,
  V1,
  V2,
  V3,
  V4,
  V5,
  V6,
  V7
>(
  ACTION_ID: T,
  reducersComponents: [
    ReducerComponents<S, V1, P>,
    ReducerComponents<S, V2, P>,
    ReducerComponents<S, V3, P>,
    ReducerComponents<S, V4, P>,
    ReducerComponents<S, V5, P>,
    ReducerComponents<S, V6, P>,
    ReducerComponents<S, V7, P>
  ]
): Record<T, Reducer<T, S, P>>;

export function createReducer<
  T extends string,
  S,
  P,
  V1,
  V2,
  V3,
  V4,
  V5,
  V6,
  V7,
  V8
>(
  ACTION_ID: T,
  reducersComponents: [
    ReducerComponents<S, V1, P>,
    ReducerComponents<S, V2, P>,
    ReducerComponents<S, V3, P>,
    ReducerComponents<S, V4, P>,
    ReducerComponents<S, V5, P>,
    ReducerComponents<S, V6, P>,
    ReducerComponents<S, V7, P>,
    ReducerComponents<S, V8, P>
  ]
): Record<T, Reducer<T, S, P>>;

export function createReducer<T extends string, S, P>(
  ACTION_ID: T,
  reducersComponents: ReducerComponents<S, any, P>[]
): Record<T, Reducer<T, S, P>> {
  const subreducers = reducersComponents.map(
    (reducerComponents: ReducerComponents<S, any, P>): SubReducer<S, P> =>
      createPartialReducer(
        reducerComponents[0],
        reducerComponents[1],
        reducerComponents[2]
      )
  );

  const result: Record<string, Reducer<T, S, P>> = {
    [ACTION_ID]: createReducerPrivate(subreducers)
  };

  return result;
}
