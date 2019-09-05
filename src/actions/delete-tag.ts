import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface DeleteTagPayload {
  ID: string;
}

export type DeleteTag = SimpleActionTemplate<'DELETE_TAG', DeleteTagPayload>;

export const DELETE_TAG = 'DELETE_TAG';

export default function deleteTag(payload: DeleteTagPayload): DeleteTag {
  return { type: DELETE_TAG, payload };
}

export const DeleteTagPayload = undefined;
export const DeleteTag = undefined;
