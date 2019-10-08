import { getTag } from './common/tags';
import { State } from '~/state';

export const isTagLocal = (state: State, ID: string): boolean => {
  const tag = getTag(state, ID);
  if (!tag) return false;
  return tag.globalID === undefined;
};
