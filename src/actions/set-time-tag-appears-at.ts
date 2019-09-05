import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetTimeTagAppearsAtPayload {
  ID: string;
  time: number;
}

export type SetTimeTagAppearsAt = SimpleActionTemplate<
  'SET_TIME_TAG_APPEARS_AT',
  SetTimeTagAppearsAtPayload
>;

export const SET_TIME_TAG_APPEARS_AT = 'SET_TIME_TAG_APPEARS_AT';

export default function setTimeTagAppearsAt(
  payload: SetTimeTagAppearsAtPayload
): SetTimeTagAppearsAt {
  return { type: SET_TIME_TAG_APPEARS_AT, payload };
}

export const SetTimeTagAppearsAtPayload = undefined;
export const SetTimeTagAppearsAt = undefined;
