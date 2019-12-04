import { RoutesMap } from 'redux-first-router';
import { ActionID as RouteActionID } from '../actions-reducers/route';
import { ACTION_ID as HOME } from '../actions-reducers/route-home';
import { ACTION_ID as REFERENCE_EDITOR } from '../actions-reducers/route-reference-editor';

type ActionIDToRoute = { [P in RouteActionID]: string };

const actionIDToRoute: ActionIDToRoute = {
  [HOME]: '/',
  [REFERENCE_EDITOR]: '/reference-editor/:videoID'
};

const routesMap: RoutesMap = actionIDToRoute;

export default routesMap;
