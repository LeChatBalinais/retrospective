import { SimpleActionTemplate } from '../types/simple-action-template';

export interface UpdateTagPathPayload {
  ID: string;
  time: number;
  x: number;
  y: number;
}

export type UpdateTagPath = SimpleActionTemplate<
  'UPDATE_TAG_PATH',
  UpdateTagPathPayload
>;

export const UPDATE_TAG_PATH = 'UPDATE_TAG_PATH';

export default function updateTagPath(
  payload: UpdateTagPathPayload
): UpdateTagPath {
  return { type: UPDATE_TAG_PATH, payload };
}
