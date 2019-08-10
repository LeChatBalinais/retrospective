import { Action, ActionCombination } from '../types/types';

export const ACTION_COMBINATION = 'ACTION_COMBINATION';

export default function actionCombination(
  actions: Action[]
): ActionCombination {
  return { type: ACTION_COMBINATION, actions };
}
