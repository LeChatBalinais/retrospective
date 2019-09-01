import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetTagGlobalIDPayload {
  ID: string;
  globalID: string;
}

export type SetTagGlobalID = SimpleActionTemplate<
  'SET_TAG_GLOBALID',
  SetTagGlobalIDPayload
>;

export const SET_TAG_GLOBALID = 'SET_TAG_GLOBALID';

export default function setTagGlobalID(
  payload: SetTagGlobalIDPayload
): SetTagGlobalID {
  return { type: SET_TAG_GLOBALID, payload };
}
