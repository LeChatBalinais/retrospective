import { MOUSE_UP_DURING_SEEKBAR_SEEKING } from '~/actions';
import { State, SeekbarStatus, SeekingStatus, VideoStatus } from '~/types';

const mouseUpDuringSeekbarSeeking = (state: State): State => {
  const { player } = state;

  const {
    seekbar: { status: seekbarStatus },
    video: { stageAt: atStage, status: videoStatus },
    lastRequestedStage
  } = player;

  if (seekbarStatus === SeekbarStatus.Idle) return state;

  let seekingStatus = SeekingStatus.NoSeeking;

  if (
    videoStatus === VideoStatus.Seeking ||
    (lastRequestedStage !== undefined && atStage !== lastRequestedStage)
  )
    seekingStatus = SeekingStatus.SeekbarSeeking;

  return {
    ...state,
    player: {
      ...player,
      seekingStatus,
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
