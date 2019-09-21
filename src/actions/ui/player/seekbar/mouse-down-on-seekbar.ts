import { ActionTemplate } from '~/types/action-template';

export type MouseDownOnSeekBarType = 'MOUSE_DOWN_ON_SEEK_BAR';

export interface MouseDownOnSeekBarPayload {
  position: number;
}

export type MouseDownOnSeekBar = ActionTemplate<
  MouseDownOnSeekBarType,
  MouseDownOnSeekBarPayload
>;

export const MOUSE_DOWN_ON_SEEK_BAR = 'MOUSE_DOWN_ON_SEEK_BAR';

export default function mouseDownOnSeekBar(
  payload: MouseDownOnSeekBarPayload
): MouseDownOnSeekBar {
  return { type: MOUSE_DOWN_ON_SEEK_BAR, payload };
}
