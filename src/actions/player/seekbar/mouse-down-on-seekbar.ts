import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export interface MouseDownOnSeekBarPayload {
  position: number;
}

export type MouseDownOnSeekBar = SimpleActionTemplate<
  'MOUSE_DOWN_ON_SEEK_BAR',
  MouseDownOnSeekBarPayload
>;

export const MOUSE_DOWN_ON_SEEK_BAR = 'MOUSE_DOWN_ON_SEEK_BAR';

export default function mousePressedOnSeekBar(
  payload: MouseDownOnSeekBarPayload
): MouseDownOnSeekBar {
  return { type: MOUSE_DOWN_ON_SEEK_BAR, payload };
}

export const MousePressedOnSeekBarPayload = undefined;
export const MousePressedOnSeekBar = undefined;
