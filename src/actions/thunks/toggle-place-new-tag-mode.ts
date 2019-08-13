import actionCreator from '../set-place-new-tag-mode';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { State } from '../../types/state';
import { isPlaceNewTagModeOn } from '../../selectors/selectors';

const mapStateToPayload = (state: State): { mode: boolean } => {
  return { mode: !isPlaceNewTagModeOn(state) };
};

export default connect([
  mapStateToActionCreator(actionCreator, mapStateToPayload)
]);
