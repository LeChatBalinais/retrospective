import { setPlayback } from '../actionCreators';
import actionWithPayloadFromState, {
  actionCreatorContainer
} from '../from-state-action-creator';
import { State } from '../../types/state';
import { getPlayback } from '../../selectors/selectors';
import { ThunkAction } from '../../types/action';

const mapStateToSetPlaybackActionPayload = (
  state: State
): { playback: boolean } => {
  return { playback: !getPlayback(state) };
};

const togglePlayback = (): ThunkAction =>
  actionWithPayloadFromState({}, [
    actionCreatorContainer(mapStateToSetPlaybackActionPayload, setPlayback)
  ]);

export default togglePlayback;
