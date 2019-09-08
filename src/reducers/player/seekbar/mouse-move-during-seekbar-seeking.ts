import { MOUSE_MOVE_DURING_SEEKBAR_SEEKING } from '~/actions/player/seekbar/mouse-move-during-seekbar-seeking';
import { State, MouseMoveDuringSeekbarSeeking } from '~/types';

const mouseMoveDuringSeekbarSeeking = (
  state: State,
  { payload: { position } }: MouseMoveDuringSeekbarSeeking
): State => {
  return {
    ...state,
    player: {
      ...state.player,
      lastRequestedStage: position
    }
  };
};

export default {
  actionType: MOUSE_MOVE_DURING_SEEKBAR_SEEKING,
  reducer: mouseMoveDuringSeekbarSeeking
};
