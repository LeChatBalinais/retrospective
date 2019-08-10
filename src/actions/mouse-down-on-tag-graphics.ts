import { SimpleActionTemplate } from '../types/simple-action-template';

export interface MouseDownOnTagGraphicsPayload {
  ID: string;
}

export type MouseDownOnTagGraphics = SimpleActionTemplate<
  'MOUSE_DOWN_ON_TAG_GRAPHICS',
  MouseDownOnTagGraphicsPayload
>;

export const MOUSE_DOWN_ON_TAG_GRAPHICS = 'MOUSE_DOWN_ON_TAG_GRAPHICS';

export default function mouseDownOnTagGraphics(
  payload: MouseDownOnTagGraphicsPayload
): MouseDownOnTagGraphics {
  return { type: MOUSE_DOWN_ON_TAG_GRAPHICS, payload };
}
