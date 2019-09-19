import { TagAppearsAtEditBoxEdited } from './tag-appears-at-editbox-edited';
import { TagDisappearsAtEditBoxEdited } from './tag-disappears-at-editbox-edited';
import { TagTraceVisibilityCheckboxToggled } from './tag-trace-visibility-checkbox-toggled';

export type CurrentTagPanelAction =
  | TagTraceVisibilityCheckboxToggled
  | TagDisappearsAtEditBoxEdited
  | TagAppearsAtEditBoxEdited;

export * from './tag-appears-at-editbox-edited';
export * from './tag-disappears-at-editbox-edited';
export * from './tag-trace-visibility-checkbox-toggled';
