import { MOUSE_DOWN_ON_SEEK_BAR, MouseDownOnSeekBar } from '~/actions';
import { State, SeekbarStatus, SeekingStatus } from '~/types';

const mouseDownOnSeekbar = (
  state: State,
  { payload: { position } }: MouseDownOnSeekBar
): State => {
  const { player } = state;

  const {
    lastRequestedStage,
    seekingStatus,
    seekbar: { status: seekbarStatus }
  } = player;

  if (
    seekbarStatus === SeekbarStatus.Seeking &&
    lastRequestedStage === position &&
    seekingStatus === SeekingStatus.SeekbarSeeking
  )
    return state;

  return {
    ...state,
    player: {
      ...player,
      lastRequestedStage: position,
      seekingStatus: SeekingStatus.SeekbarSeeking,
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
