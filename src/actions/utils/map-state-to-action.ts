import { State } from '../../types/state';
import { ThunkAction, ThunkDispatch, Action } from '../../types/types';
import actionCombination from './action-combination';

export type MapStateToPayload<E, P> = (state: State, externalPayload?: E) => P;

export function mapStateToActionCreator<E, P>(
  actionCreator: (payload: P) => Action,
  mapStateToPayload: MapStateToPayload<E, P> = (
    state: State,
    externalPayload?: P & E
  ): P => externalPayload
): (state: State, externalPayload?: E) => Action {
  return (state: State, externalPayload?: E): Action => {
    const payload = mapStateToPayload(state, externalPayload);
    if (payload === undefined) return undefined;
    return actionCreator({
      ...payload
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
      const action = actionCreator(getState(), payload);
      if (action !== undefined) dispatch(action);
      return;
    }

    const actions: ((p: E) => Action)[] = [];

    for (let index = 0; index < actionCreators.length; index += 1) {
      const actionCreator = actionCreators[index];
      actions.push((p: E): Action => actionCreator(getState(), p));
    }
    dispatch(actionCombination(actions)(payload));
  };
}
