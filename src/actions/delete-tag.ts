import { SimpleActionTemplate } from '../types/simple-action-template';

export interface DeleteTagPayload {
  ID: string;
}

export type DeleteTag = SimpleActionTemplate<'DELETE_TAG', DeleteTagPayload>;

export const DELETE_TAG = 'DELETE_TAG';

export default function deleteTag(payload: DeleteTagPayload): DeleteTag {
  return { type: DELETE_TAG, payload };
}
