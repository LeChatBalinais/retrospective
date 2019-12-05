export type HomePage = 'Home';
export type ReferenceEditorPage = 'ReferenceEditor';
export type CompositionPlayerPage = 'CompositionPlayer';
export type NotFoundPage = 'NotFound';

export type Page =
  | HomePage
  | ReferenceEditorPage
  | CompositionPlayerPage
  | NotFoundPage;

export const HOME_PAGE: HomePage = 'Home';
export const REFERENCE_EDITOR_PAGE: ReferenceEditorPage = 'ReferenceEditor';
export const COMPOSITION_PLAYER_PAGE: CompositionPlayerPage =
  'CompositionPlayer';
export const NOT_FOUND_PAGE: NotFoundPage = 'NotFound';
