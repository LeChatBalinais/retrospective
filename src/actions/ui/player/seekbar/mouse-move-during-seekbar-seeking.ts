import { ActionTemplate } from '~/types/action-template';

export type MouseMoveDuringSeekbarSeekingType = 'MOUSE_MOVE_DURING_SEEKBAR_SEEKING';
export interface MouseMoveDuringSeekbarSeekingPayload {
  position: number;
}

export type MouseMoveDuringSeekbarSeeking = ActionTemplate<
  MouseMoveDuringSeekbarSeekingType,
  MouseMoveDuringSeekbarSeekingPayload
>;

export const MOUSE_MOVE_DURING_SEEKBAR_SEEKING =
  'MOUSE_MOVE_DURING_SEEKBAR_SEEKING';

export default function mouseMoveDuringSeekbarSeeking(
  payload: MouseMoveDuringSeekbarSeekingPayload
): MouseMoveDuringSeekbarSeeking {
  return { type: MOUSE_MOVE_DURING_SEEKBAR_SEEKING, payload };
}
