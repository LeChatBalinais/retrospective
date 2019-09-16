import { TagRowClicked } from './tag-row-clicked';
import { DeleteTagButtonClicked } from './delete-tag-button-clicked';
import { SaveTagButtonClicked } from './save-tag-button-clicked';

export type TagRowActions =
  | TagRowClicked
  | DeleteTagButtonClicked
  | SaveTagButtonClicked;

export * from './tag-row-clicked';
export * from './delete-tag-button-clicked';
export * from './save-tag-button-clicked';
