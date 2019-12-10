import { State } from '~/state';

export const isTagLocal = (
  { entities: { tags } }: State,
  ID: string
): boolean => tags.localOnly.includes(ID);
