import DEFAULT_STATE from './default-state';
import { State, Action, ActionCombination, SimpleAction } from '../types';
import { ACTION_COMBINATION } from '../utils/action-combination';
import simpleActionRootReducer from './simple-action-root-reducer';

function actionCombinationRootReducer(
  state: State,
  action: ActionCombination
): State {
  const reducer = (accumulator: State, currentValue: Action): State => {
    if (currentValue.type === ACTION_COMBINATION)
      return actionCombinationRootReducer(
        accumulator,
        currentValue as ActionCombination
      );

    return simpleActionRootReducer(accumulator, currentValue as SimpleAction);
  };
  return action.actions.reduce(reducer, state);
}

const rootReducer = (state: State = DEFAULT_STATE, action: Action): State => {
  if (action.type === ACTION_COMBINATION)
    return actionCombinationRootReducer(state, action as ActionCombination);

  return simpleActionRootReducer(state, action as SimpleAction);
};

export default rootReducer;
