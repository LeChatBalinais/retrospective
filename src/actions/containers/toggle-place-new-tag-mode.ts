import { setPlaceNewTagMode as actionCreator } from '../actionCreators';
import connect, { actionWithMappedPayload } from '../prepared-action';
import { State } from '../../types/state';
import { isPlaceNewTagModeOn } from '../../selectors/selectors';

const mapStateToPayload = (state: State): { mode: boolean } => {
  return { mode: !isPlaceNewTagModeOn(state) };
};

export default connect([
  actionWithMappedPayload(mapStateToPayload, actionCreator)
]);
