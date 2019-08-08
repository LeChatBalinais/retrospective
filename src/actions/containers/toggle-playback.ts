import { setPlayback as actionCreator } from '../actionCreators';
import connect, { actionWithMappedPayload } from '../prepared-action';
import { State } from '../../types/state';
import { getPlayback } from '../../selectors/selectors';

const mapStateToPayload = (state: State): { playback: boolean } => {
  return { playback: !getPlayback(state) };
};

export default connect([
  actionWithMappedPayload(mapStateToPayload, actionCreator)
]);
