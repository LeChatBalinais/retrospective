import { updateTagPath as actionCreator } from '../actionCreators';
import connect, { actionWithMappedPayload } from '../prepared-action';
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

export const createUpdateTagBeingEditedPath = actionWithMappedPayload(
  mapStateToPayload,
  actionCreator
);

export default connect([createUpdateTagBeingEditedPath]);
