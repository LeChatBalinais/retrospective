import actionCreator from '../actions/set-current-stage';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { getVideoDuration } from '../selectors/selectors';

import { State, SetCurrentStagePayload } from '../types';

export interface SetCurrentTimePayload {
  time: number;
}

const mapStateToPayload = (
  state: State,
  { time }: SetCurrentTimePayload
): SetCurrentStagePayload => {
  return { time: time / getVideoDuration(state) };
};

const setStageAt = connect([
  mapStateToActionCreator(actionCreator, mapStateToPayload)
]);

export default setStageAt;
