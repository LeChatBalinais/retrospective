import actionCreator, {
  SetCurrentNormalizedTimePayload
} from '../actions/set-current-normalized-time';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { State } from '../types/state';
import { getVideoDuration } from '../selectors/selectors';

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
