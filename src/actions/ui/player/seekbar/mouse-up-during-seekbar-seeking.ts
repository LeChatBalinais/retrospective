import { ActionTemplate } from '~/types/action-template';

export type MouseUpDuringSeekbarSeekingType = 'MOUSE_UP_DURING_SEEKBAR_SEEKING';

export type MouseUpDuringSeekbarSeeking = ActionTemplate<
  MouseUpDuringSeekbarSeekingType,
  {}
>;

export const MOUSE_UP_DURING_SEEKBAR_SEEKING =
  'MOUSE_UP_DURING_SEEKBAR_SEEKING';

export default function mouseUpDuringSeekbarSeeking(): MouseUpDuringSeekbarSeeking {
  return { type: MOUSE_UP_DURING_SEEKBAR_SEEKING, payload: {} };
}
