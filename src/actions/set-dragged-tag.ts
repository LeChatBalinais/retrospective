import { SimpleActionTemplate } from '../types/simple-action-template';

export interface SetDraggedTagPayload {
  ID: string;
}

export type SetDraggedTag = SimpleActionTemplate<
  'SET_DRAGGED_TAG',
  SetDraggedTagPayload
>;

export const SET_DRAGGED_TAG = 'SET_DRAGGED_TAG';

export default function setDraggedTag(
  payload: SetDraggedTagPayload
): SetDraggedTag {
  return { type: SET_DRAGGED_TAG, payload };
}
