import actionCreator, { SetPlaybackPayload } from '../set-playback';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { State } from '../../types/state';
import { getPlayback } from '../../selectors/selectors';

const mapStateToPayload = (state: State): SetPlaybackPayload => {
  return { playback: !getPlayback(state) };
};

export default connect([
  mapStateToActionCreator(actionCreator, mapStateToPayload)
]);
