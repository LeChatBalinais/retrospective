import actionCreator from '../actions/set-place-new-tag-mode';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { State } from '../types';
import { isPlaceNewTagModeOn } from '../selectors/selectors';

const mapStateToPayload = (state: State): { mode: boolean } => {
  return { mode: !isPlaceNewTagModeOn(state) };
};

export default connect([
  mapStateToActionCreator(actionCreator, mapStateToPayload)
]);
