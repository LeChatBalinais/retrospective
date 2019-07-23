import { createSelector, OutputSelector } from 'reselect';
import { getTagsByID } from './selectors';
import Tag from '../types/tag';
import { State } from '../types/state';

const makeGetTag = (): OutputSelector<
  State,
  Tag,
  (res: { [ID: string]: Tag }, ID: string) => Tag
> => {
  return createSelector(
    [getTagsByID, (state: State, props: { ID: string }): string => props.ID],
    (tags: { [ID: string]: Tag }, ID: string): Tag => {
      return (tags[ID]);
    }
  );
};

export default makeGetTag;
