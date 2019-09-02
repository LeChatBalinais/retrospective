import actionCreator from '../actions/set-stage-seek-to';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { State } from '../types';
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

const setStageAtTagAppearance = connect([
  mapStateToActionCreator(actionCreator, mapStateToPayload)
]);

export default setStageAtTagAppearance;
