import actionCreator, { SetPlaybackPayload } from '../actions/set-playback';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { State } from '../types';
import { getPlayerStatus } from '../selectors/selectors';

const mapStateToPayload = (state: State): SetPlaybackPayload => {
  return { playback: !getPlayerStatus(state) };
};

const togglePlayback = connect([
  mapStateToActionCreator(actionCreator, mapStateToPayload)
]);

export default togglePlayback;
