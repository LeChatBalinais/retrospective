import { State } from '~/state';
import { getTag } from '~/getters/tags';

export const getTagCaption = (state: State, ID: string): string => {
  const { path } = getTag(state, ID);

  return `${ID.substring(0, 4)} (${
    path.length === 0 ? '' : path[0].time.toFixed(2)
  } - ${path.length <= 1 ? '' : path[path.length - 1].time.toFixed(2)})`;
};
