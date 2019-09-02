import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface SetCurrentStagePayload {
  time: number;
}

export type SetCurrentStage = SimpleActionTemplate<
  'SET_CURRENT_STAGE',
  SetCurrentStagePayload
>;

export const SET_CURRENT_STAGE = 'SET_CURRENT_STAGE';

export default function setCurrentTime(
  payload: SetCurrentStagePayload
): SetCurrentStage {
  return { type: SET_CURRENT_STAGE, payload };
}
