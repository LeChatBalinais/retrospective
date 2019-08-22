import { Action, ActionCombination } from '../types/types';

export const ACTION_COMBINATION = 'ACTION_COMBINATION';

export default function actionCombination<P>(
  actionCreators: ((payload: P) => Action)[]
): (payload: P) => ActionCombination {
  return (payload: P): ActionCombination => ({
    type: ACTION_COMBINATION,
    actions: actionCreators
      .map(
        (actionCreator: (payload: P) => Action): Action =>
          actionCreator(payload)
      )
      .filter((action?: Action): boolean => action !== undefined)
  });
}
