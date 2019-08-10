import { State } from '../types/state';
import { ThunkAction, ThunkDispatch, Action } from '../types/types';
import actionCombination from './action-combination';

export type MapStateToPayload<E, P> = (state: State, externalPayload?: E) => P;

export function actionWithMappedPayload<E, P>(
  mapStateToPayload: MapStateToPayload<E, P>,
  actionCreator: (payload: P) => Action
): (state: State, externalPayload?: E) => Action {
  return (state: State, externalPayload?: E): Action => {
    return actionCreator({
      ...mapStateToPayload(state, externalPayload)
    });
  };
}

export default function connect<E>(
  actionCreators: ((state: State, externalPayload?: E) => Action)[]
): (payload?: E) => ThunkAction {
  return (payload?: E): ThunkAction => (
    dispatch: ThunkDispatch,
    getState: () => State
  ): void => {
    if (actionCreators.length === 0) return;

    if (actionCreators.length === 1) {
      const [actionCreator] = actionCreators;
      dispatch(actionCreator(getState(), payload));
      return;
    }

    const actions: Action[] = [];

    for (let index = 0; index < actionCreators.length; index += 1) {
      const actionCreator = actionCreators[index];
      actions.push(actionCreator(getState(), payload));
    }
    dispatch(actionCombination(actions));
  };
}
