import { SimpleActionTemplate } from '../types/simple-action-template';

export interface SetTimeTagDisappearsAtPayload {
  ID: string;
  time: number;
}

export type SetTimeTagDisappearsAt = SimpleActionTemplate<
  'SET_TIME_TAG_DISAPPEARS_AT',
  SetTimeTagDisappearsAtPayload
>;

export const SET_TIME_TAG_DISAPPEARS_AT = 'SET_TIME_TAG_DISAPPEARS_AT';

export default function setTimeTagDisappearsAt(
  payload: SetTimeTagDisappearsAtPayload
): SetTimeTagDisappearsAt {
  return { type: SET_TIME_TAG_DISAPPEARS_AT, payload };
}
