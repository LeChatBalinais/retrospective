import { MOUSE_UP_DURING_SEEKBAR_SEEKING } from '~/actions/player/seekbar/mouse-up-during-seekbar-seeking';
import { State, SeekbarStatus } from '~/types';

const mouseUpDuringSeekbarSeeking = (state: State): State => {
  const { player } = state;

  const {
    seekbar: { status: seekbarStatus }
  } = player;

  if (seekbarStatus === SeekbarStatus.Idle) return state;

  return {
    ...state,
    player: {
      ...player,
      seekbar: {
        status: SeekbarStatus.Idle
      }
    }
  };
};

export default {
  actionType: MOUSE_UP_DURING_SEEKBAR_SEEKING,
  reducer: mouseUpDuringSeekbarSeeking
};
