import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type TagDisappearsAtEditBoxEditedType = 'TAG_DISAPPEARS_AT_EDIT_BOX_EDITED';

export interface TagDisappearsAtEditBoxEditedPayload {
  tagID: string;
  time: number;
}

export type TagDisappearsAtEditBoxEdited = SimpleActionTemplate<
  TagDisappearsAtEditBoxEditedType,
  TagDisappearsAtEditBoxEditedPayload
>;

export const TAG_DISAPPEARS_AT_EDIT_BOX_EDITED =
  'TAG_DISAPPEARS_AT_EDIT_BOX_EDITED';

export default function tagDisappearsAtEditBoxEdited(
  payload: TagDisappearsAtEditBoxEditedPayload
): TagDisappearsAtEditBoxEdited {
  return { type: TAG_DISAPPEARS_AT_EDIT_BOX_EDITED, payload };
}
