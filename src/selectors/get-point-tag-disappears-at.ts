import { getTag } from '~/selectors/common/tags';
import { State } from '~/state';

export const getPointTagDisappearsAt = (
  state: State,
  ID: string
): { time: number; x: number; y: number } => {
  const tag = getTag(state, ID);

  if (tag === undefined) return undefined;

  const { path } = tag;

  if (path.length === 0) return undefined;

  const { length: l, [l - 1]: disappearsAt } = path;

  return disappearsAt;
};
