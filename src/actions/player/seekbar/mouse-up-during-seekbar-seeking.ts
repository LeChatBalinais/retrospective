import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type MouseUpDuringSeekbarSeeking = SimpleActionTemplate<
  'MOUSE_UP_DURING_SEEKBAR_SEEKING',
  {}
>;

export const MOUSE_UP_DURING_SEEKBAR_SEEKING =
  'MOUSE_UP_DURING_SEEKBAR_SEEKING';

export default function mouseUpDuringSeekbarSeeking(): MouseUpDuringSeekbarSeeking {
  return { type: MOUSE_UP_DURING_SEEKBAR_SEEKING, payload: {} };
}

export const MouseUpDuringSeekbarSeekingPayload = undefined;
export const MouseUpDuringSeekbarSeeking = undefined;
