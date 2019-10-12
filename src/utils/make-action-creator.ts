import { ActionTemplate } from '~/utils/action-template';

export function makeActionCreator<T, P>(
  type: T
): (payload: P) => ActionTemplate<T, P>;

export function makeActionCreator<T>(type: T): () => ActionTemplate<T>;

export function makeActionCreator<T, P = undefined>(
  type: T
): (payload?: P) => ActionTemplate<T, P> {
  return (payload?: P): ActionTemplate<T, P> => {
    return { type, payload };
  };
}
