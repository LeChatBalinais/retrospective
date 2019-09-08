import {
  MOUSE_MOVE_DURING_SEEKBAR_SEEKING,
  MouseMoveDuringSeekbarSeeking
} from '~/actions';
import { State } from '~/types';

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
