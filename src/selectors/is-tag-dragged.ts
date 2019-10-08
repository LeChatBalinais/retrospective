import { State } from '~/state';
import { getTagBeingEditedIDs } from '~/selectors/common/tag-editor';

export const isTagDragged = (state: State, ID: string): boolean =>
  getTagBeingEditedIDs(state).includes(ID);
