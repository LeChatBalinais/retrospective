import { State } from '~/types';
import { isTagLocal } from '~/selectors/common';
import { isTagCurrent } from '~/selectors/selectors';

export const isSaveButtonAvailable = (state: State, ID: string): boolean =>
  isTagLocal(state, ID);

export const isTagRowHighlighted = (state: State, ID: string): boolean =>
  isTagCurrent(state, ID);
