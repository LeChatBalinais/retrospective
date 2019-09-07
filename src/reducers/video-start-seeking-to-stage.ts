import { State, VideoStatus } from '../types';
import {
  VideoStartSeekingToStage,
  VIDEO_START_SEEKING_TO_STAGE
} from '../actions/video-start-seeking-to-stage';

const videoStartSeekingToStage = (
  state: State,
  action: VideoStartSeekingToStage
): State => {
  const {
    payload: { stage: stageSeekingTo }
  } = action;

  return {
    ...state,
    player: {
      ...state.player,
      video: {
        ...state.player.video,
        stageSeekingTo,
        status: VideoStatus.Seeking
      }
    }
  };
};

const actionTypeReducerPair = {
  actionType: VIDEO_START_SEEKING_TO_STAGE,
  reducer: videoStartSeekingToStage
};

export default actionTypeReducerPair;
