import { SubReducer, createPartialReducer } from './create-partial-reducer';

type Reducer<T, S, P> = (state: S, action: { type: T; payload: P }) => S;

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
