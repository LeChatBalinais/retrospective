import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type MouseUpDuringSeekbarSeekingType = 'MOUSE_UP_DURING_SEEKBAR_SEEKING';

export type MouseUpDuringSeekbarSeeking = SimpleActionTemplate<
  MouseUpDuringSeekbarSeekingType,
  {}
>;

export const MOUSE_UP_DURING_SEEKBAR_SEEKING =
  'MOUSE_UP_DURING_SEEKBAR_SEEKING';

export default function mouseUpDuringSeekbarSeeking(): MouseUpDuringSeekbarSeeking {
  return { type: MOUSE_UP_DURING_SEEKBAR_SEEKING, payload: {} };
}
