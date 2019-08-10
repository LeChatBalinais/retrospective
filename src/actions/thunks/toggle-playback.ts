import actionCreator, { SetPlaybackPayload } from '../set-playback';
import connect, { actionWithMappedPayload } from '../prepared-action';
import { State } from '../../types/state';
import { getPlayback } from '../../selectors/selectors';

const mapStateToPayload = (state: State): SetPlaybackPayload => {
  return { playback: !getPlayback(state) };
};

export default connect([
  actionWithMappedPayload(mapStateToPayload, actionCreator)
]);
