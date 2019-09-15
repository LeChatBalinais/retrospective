import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export interface MouseMoveDuringSeekbarSeekingPayload {
  position: number;
}

export type MouseMoveDuringSeekbarSeeking = SimpleActionTemplate<
  'MOUSE_MOVE_DURING_SEEKBAR_SEEKING',
  MouseMoveDuringSeekbarSeekingPayload
>;

export const MOUSE_MOVE_DURING_SEEKBAR_SEEKING =
  'MOUSE_MOVE_DURING_SEEKBAR_SEEKING';

export default function mouseMoveDuringSeekbarSeeking(
  payload: MouseMoveDuringSeekbarSeekingPayload
): MouseMoveDuringSeekbarSeeking {
  return { type: MOUSE_MOVE_DURING_SEEKBAR_SEEKING, payload };
}

export const MouseMoveDuringSeekbarSeekingPayload = undefined;
export const MouseMoveDuringSeekbarSeeking = undefined;
