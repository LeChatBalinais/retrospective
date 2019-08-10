import { State } from '../types/state';
import { isTagCurrent } from '../selectors/selectors';
import setCurrentTag from './set-current-tag';
import setDraggedTag from './set-dragged-tag';
import setPlayback from './set-playback';
import setPlaybackActionCreator from '../actions/set-playback';
import setDraggedTagActionCreator from '../actions/set-dragged-tag';
import setCurrentTagActionCreator from '../actions/set-current-tag';
import { MouseDownOnTagGraphics } from '../actions/mouse-down-on-tag-graphics';

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
    newState = setDraggedTag(newState, setDraggedTagActionCreator({ ID }));
    newState = setPlayback(
      newState,
      setPlaybackActionCreator({ playback: true })
    );
  } else {
    newState = setCurrentTag(newState, setCurrentTagActionCreator({ ID }));
  }

  return newState;
};

export default mouseDownOnTagGraphics;
