import actionCreator from '../update-tag-path';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { State } from '../../types/state';
import {
  getBeingEditedTagIDs,
  getCurrentTime
} from '../../selectors/selectors';

const mapStateToPayload = (
  state: State,
  payload: { x: number; y: number }
): { ID: string; time: number; x: number; y: number } => {
  const [ID] = getBeingEditedTagIDs(state);
  const time = getCurrentTime(state);
  return { ID, time, ...payload };
};

export const createUpdateTagBeingEditedPath = mapStateToActionCreator(
  actionCreator,
  mapStateToPayload
);

export default connect([createUpdateTagBeingEditedPath]);
