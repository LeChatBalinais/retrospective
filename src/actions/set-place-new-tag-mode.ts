import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetPlaceNewTagModePayload {
  mode: boolean;
}

export type SetPlaceNewTagMode = SimpleActionTemplate<
  'SET_PLACE_NEW_TAG_MODE',
  SetPlaceNewTagModePayload
>;

export const SET_PLACE_NEW_TAG_MODE = 'SET_PLACE_NEW_TAG_MODE';

export default function setPlaceNewTagMode(
  payload: SetPlaceNewTagModePayload
): SetPlaceNewTagMode {
  return { type: SET_PLACE_NEW_TAG_MODE, payload };
}
