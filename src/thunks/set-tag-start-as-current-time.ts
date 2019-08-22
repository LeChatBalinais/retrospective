import actionCreator from '../actions/set-current-normalized-time';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { State } from '../types/state';
import { makeGetTagAppearsAt } from '../selectors/tag-selectors';
import { getVideoDuration } from '../selectors/selectors';

export interface SetTagStartAsCurrentTimePayload {
  ID: string;
}

const tagAppearsAt = makeGetTagAppearsAt();

const mapStateToPayload = (
  state: State,
  { ID }: SetTagStartAsCurrentTimePayload
): { time: number } => {
  return { time: tagAppearsAt(state, ID).time / getVideoDuration(state) };
};

export const setTagStartAsCurrentTime = mapStateToActionCreator(
  actionCreator,
  mapStateToPayload
);

export default connect([
  mapStateToActionCreator(actionCreator, mapStateToPayload)
]);
