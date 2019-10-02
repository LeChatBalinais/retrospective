import { State } from '~/types/state';
import { Action, reducers as reducersS } from '~/actions-reducers';
import DEFAULT_STATE from '../default-state';

const simpleActionRootReducer = (): ((
  state: State,
  action: Action
) => State) => {
  const reducers: {
    actionType: string;
    reducer: (state: State, action: Action) => State;
  }[] = [];

  const reducersByActionType = reducersS;
  reducers.forEach(
    (reducer: {
      actionType: string;
      reducer: (state: State, action: Action) => State;
    }): void => {
      reducersByActionType[reducer.actionType] = reducer.reducer;
    }
  );

  return (state: State = DEFAULT_STATE, action: Action): State => {
    const reducer = reducersByActionType[action.type];
    if (reducer === undefined) return state;
    return reducer(state, action);
  };
};

export default simpleActionRootReducer();
