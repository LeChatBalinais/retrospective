// pageReducer.js
import { NOT_FOUND } from 'redux-first-router';
import { NotFound } from './not-found';
import { ActionID as RouteActionID } from '../actions-reducers/route';
import {
  ACTION_ID as HOME,
  ActionID as HomeActionID
} from '../actions-reducers/route-home';
import {
  ACTION_ID as REFERENCE_EDITOR,
  ActionID as ReferenceEditorActionID
} from '../actions-reducers/route-reference-editor';
import {
  ACTION_ID as COMPOSITION_PLAYER,
  ActionID as CompositionPlayerID
} from '../actions-reducers/route-composition-player';
import { Action } from '../actions-reducers';
import {
  HomePage,
  ReferenceEditorPage,
  CompositionPlayerPage,
  NotFoundPage
} from './pages';

export type Page<T extends RouteActionID | NotFound> = T extends HomeActionID
  ? HomePage
  : T extends ReferenceEditorActionID
  ? ReferenceEditorPage
  : T extends CompositionPlayerID
  ? CompositionPlayerPage
  : T extends NotFound
  ? NotFoundPage
  : undefined;

type ActionIDToPage = { [P in RouteActionID | NotFound]: Page<P> };

const components: ActionIDToPage = {
  [HOME]: 'Home',
  [REFERENCE_EDITOR]: 'ReferenceEditor',
  [COMPOSITION_PLAYER]: 'CompositionPlayer',
  [NOT_FOUND]: 'NotFound'
};

export default (state = 'Home', action: Action): string =>
  components[action.type] || state;
