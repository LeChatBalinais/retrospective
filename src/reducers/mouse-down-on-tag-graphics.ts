import { State } from '../types/state';
import { MouseDownOnTagGraphics } from '../types/action';
import { isTagCurrent } from '../selectors/selectors';
import setCurrentTag from './set-current-tag';
import setDraggedTag from './set-dragged-tag';
import setPlayback from './set-playback';
import {
  setCurrentTag as setCurrentTagActionCreator,
  setDraggedTag as setDraggedTagActionCreator,
  setPlayback as setPlaybackActionCreator
} from '../actions/actionCreators';

const mouseDownOnTagGraphics = (
  state: State,
  action: MouseDownOnTagGraphics
): State => {
  const {
    payload: { ID }
  } = action;
  const tagIsCurrent = isTagCurrent(state, ID);
  let newState = state;

  if (tagIsCurrent) {
    newState = setDraggedTag(newState, setDraggedTagActionCreator(ID));
    newState = setPlayback(newState, setPlaybackActionCreator(true));
  } else {
    newState = setCurrentTag(newState, setCurrentTagActionCreator(ID));
  }

  return newState;
};

export default mouseDownOnTagGraphics;
