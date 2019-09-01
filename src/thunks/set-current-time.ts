import actionCreator from '../actions/set-current-normalized-time';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { getVideoDuration } from '../selectors/selectors';

import { State, SetCurrentNormalizedTimePayload } from '../types';

export interface SetCurrentTimePayload {
  time: number;
}

const mapStateToPayload = (
  state: State,
  { time }: SetCurrentTimePayload
): SetCurrentNormalizedTimePayload => {
  return { time: time / getVideoDuration(state) };
};

export default connect([
  mapStateToActionCreator(actionCreator, mapStateToPayload)
]);
