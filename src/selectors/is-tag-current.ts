import { State } from '~/state';
import { getCurrentTagID } from '~/getters/tag-editor';

export const isTagCurrent = (state: State, ID: string): boolean =>
  getCurrentTagID(state) === ID;
