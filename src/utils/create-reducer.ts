type Reducer<T, S, P> = (state: S, action: { type: T; payload: P }) => S;
type SubReducer<S, P> = (initialState: S, currentState: S, payload: P) => S;

export default function createReducer<T, S, P = {}>(
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
