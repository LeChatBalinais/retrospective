import { SET_STAGE_SEEK_TO } from '../actions/set-stage-seek-to';

import { State, SetStageSeekTo } from '../types';

const setStageSeekTo = (state: State, action: SetStageSeekTo): State => {
  const {
    payload: { time: stageSeekTo }
  } = action;

  return {
    ...state,
    player: {
      ...state.player,
      video: { ...state.player.video, stageSeekTo }
    }
  };
};

export default {
  actionType: SET_STAGE_SEEK_TO,
  reducer: setStageSeekTo
};
