import { createSelector, OutputParametricSelector } from 'reselect';
import { getLocalTagIDs } from './selectors';
import { State } from '../types/state';

const makeIsTagLocal = (): OutputParametricSelector<
  State,
  string,
  boolean,
  (res: string[], ID: string) => boolean
> => {
  return createSelector(
    [getLocalTagIDs, (state: State, ID: string): string => ID],
    (localTagIDs: string[], ID: string): boolean => {
      return localTagIDs.includes(ID);
    }
  );
};

export default makeIsTagLocal;
