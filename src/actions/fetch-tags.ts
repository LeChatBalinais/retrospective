import { SimpleActionTemplate } from '../types/simple-action-template';

export type FetchTags = SimpleActionTemplate<'FETCH_TAGS', {}>;

export const FETCH_TAGS = 'FETCH_TAGS';

export default function fetchTags(): FetchTags {
  return { type: FETCH_TAGS, payload: {} };
}
