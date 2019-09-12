type Reducer<S, P> = (state: S, action: { payload: P }) => S;
type SubReducer<S, P> = (initialState: S, currentState: S, payload: P) => S;

export default function createReducer<S, P>(
  reducers: SubReducer<S, P>[]
): Reducer<S, P> {
  return (state: S, { payload }: { payload: P }): S => {
    let newState = state;

    newState = reducers.reduce(
      (intermediateState: S, reducer: SubReducer<S, P>): S =>
        reducer(state, intermediateState, payload),
      newState
    );

    return newState;
  };
}
