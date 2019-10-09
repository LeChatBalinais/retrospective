import { State, TagsByID, PlaneTimePoint, Tag } from '~/state';

export const getTags = ({
  entities: {
    tags: { byID }
  }
}: State): TagsByID => byID;

export const getTagIDs = ({
  entities: {
    tags: { allIDs }
  }
}: State): string[] => allIDs;

export const getTag = (
  {
    entities: {
      tags: { byID }
    }
  }: State,
  ID: string
): Tag => byID[ID];

export const getTagPath = (state: State, ID: string): PlaneTimePoint[] => {
  const tag = getTag(state, ID);
  return tag === undefined ? undefined : tag.path;
};

export const getTagGlobalID = (state: State, ID: string): string => {
  const tag = getTag(state, ID);
  return tag ? tag.globalID : undefined;
};
