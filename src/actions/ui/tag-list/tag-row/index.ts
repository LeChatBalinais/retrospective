import { TagRowClicked } from './tag-row-clicked';
import { DeleteTagButtonClicked } from './delete-tag-button-clicked';

export type TagRowActions = TagRowClicked | DeleteTagButtonClicked;

export * from './tag-row-clicked';
export * from './delete-tag-button-clicked';
