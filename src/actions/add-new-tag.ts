import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface AddNewTagPayload {
  ID: string;
  x: number;
  y: number;
}

export type AddNewTag = SimpleActionTemplate<'ADD_NEW_TAG', AddNewTagPayload>;

export const ADD_NEW_TAG = 'ADD_NEW_TAG';

export default function addNewTag(payload: AddNewTagPayload): AddNewTag {
  return { type: ADD_NEW_TAG, payload };
}

export const AddNewTagPayload = undefined;
export const AddNewTag = undefined;
