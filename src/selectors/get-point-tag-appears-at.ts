import { getTag } from '~/getters/tags';
import { State } from '~/state';

export const getPointTagAppearsAt = (
  state: State,
  ID: string
): { time: number; x: number; y: number } => {
  const tag = getTag(state, ID);

  if (tag === undefined) return undefined;

  const { path } = tag;

  if (path.length === 0) return undefined;

  const [appearsAt] = path;

  return appearsAt;
};
