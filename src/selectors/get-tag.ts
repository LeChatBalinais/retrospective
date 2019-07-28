import { createSelector, OutputParametricSelector } from 'reselect';
import { getTags } from './selectors';
import { State, Tag } from '../types/state';

const makeGetTag = (): OutputParametricSelector<
  State,
  string,
  Tag,
  (res: { [ID: string]: Tag }, ID: string) => Tag
> => {
  return createSelector(
    [getTags, (state: State, ID: string): string => ID],
    (tags: { [ID: string]: Tag }, ID: string): Tag => {
      return tags[ID];
    }
  );
};

export default makeGetTag;
