import { SimpleActionTemplate } from '../types/simple-action-template';

export interface SetTagTraceVisiblePayload {
  ID: string;
  visible: boolean;
}

export type SetTagTraceVisible = SimpleActionTemplate<
  'SET_TAG_TRACE_VISIBLE',
  SetTagTraceVisiblePayload
>;

export const SET_TAG_TRACE_VISIBLE = 'SET_TAG_TRACE_VISIBLE';

export default function setTagTraceVisible(
  payload: SetTagTraceVisiblePayload
): SetTagTraceVisible {
  return { type: SET_TAG_TRACE_VISIBLE, payload };
}
