import { MOUSE_DOWN_ON_SEEK_BAR } from '~/actions/player/seekbar/mouse-down-on-seekbar';
import {
  State,
  MousePressedOnSeekBar,
  SeekbarStatus,
  SeekingStatus
} from '~/types';

const mouseDownOnSeekbar = (
  state: State,
  { payload: { position } }: MousePressedOnSeekBar
): State => {
  return {
    ...state,
    player: {
      ...state.player,
      lastRequestedStage: position,
      seekingStatus: SeekingStatus.Seeking,
      seekbar: {
        status: SeekbarStatus.Seeking
      }
    }
  };
};

export default {
  actionType: MOUSE_DOWN_ON_SEEK_BAR,
  reducer: mouseDownOnSeekbar
};
