import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type TagAppearsAtEditBoxEditedType = 'TAG_APPEARS_AT_EDIT_BOX_EDITED';

export interface TagAppearsAtEditBoxEditedPayload {
  tagID: string;
  time: number;
}

export type TagAppearsAtEditBoxEdited = SimpleActionTemplate<
  TagAppearsAtEditBoxEditedType,
  TagAppearsAtEditBoxEditedPayload
>;

export const TAG_APPEARS_AT_EDIT_BOX_EDITED = 'TAG_APPEARS_AT_EDIT_BOX_EDITED';

export default function tagAppearsAtEditBoxEdited(
  payload: TagAppearsAtEditBoxEditedPayload
): TagAppearsAtEditBoxEdited {
  return { type: TAG_APPEARS_AT_EDIT_BOX_EDITED, payload };
}
