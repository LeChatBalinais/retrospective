import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetStageSeekToPayload {
  time: number;
}

export type SetStageSeekTo = SimpleActionTemplate<
  'SET_STAGE_SEEK_TO',
  SetStageSeekToPayload
>;

export const SET_STAGE_SEEK_TO = 'SET_STAGE_SEEK_TO';

export default function setRequestedTime(
  payload: SetStageSeekToPayload
): SetStageSeekTo {
  return { type: SET_STAGE_SEEK_TO, payload };
}

export const SetStageSeekToPayload = undefined;
export const SetStageSeekTo = undefined;
