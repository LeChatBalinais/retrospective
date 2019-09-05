import { Table, Tag } from '../types/state';
import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetTagsPayload {
  tags: Table<Tag>;
}

export type SetTags = SimpleActionTemplate<'SET_TAGS', SetTagsPayload>;

export const SET_TAGS = 'SET_TAGS';

export default function setTags(payload: SetTagsPayload): SetTags {
  return { type: SET_TAGS, payload };
}

export const SetTagsPayload = undefined;
export const SetTags = undefined;
