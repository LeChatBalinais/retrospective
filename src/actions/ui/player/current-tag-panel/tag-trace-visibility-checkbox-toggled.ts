import { ActionTemplate } from '~/types/action-template';

export type TagTraceVisibilityCheckboxToggledType = 'TAG_TRACE_VISIBILITY_CHECKBOX_TOGGLED';

export interface TagTraceVisibilityCheckboxToggledPayload {
  tagID: string;
  visible: boolean;
}

export type TagTraceVisibilityCheckboxToggled = ActionTemplate<
  TagTraceVisibilityCheckboxToggledType,
  TagTraceVisibilityCheckboxToggledPayload
>;

export const TAG_TRACE_VISIBILITY_CHECKBOX_TOGGLED =
  'TAG_TRACE_VISIBILITY_CHECKBOX_TOGGLED';

export default function tagTraceVisibilityCheckboxToggled(
  payload: TagTraceVisibilityCheckboxToggledPayload
): TagTraceVisibilityCheckboxToggled {
  return { type: TAG_TRACE_VISIBILITY_CHECKBOX_TOGGLED, payload };
}
