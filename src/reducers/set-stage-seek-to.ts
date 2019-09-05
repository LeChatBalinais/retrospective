import { SET_STAGE_SEEK_TO } from '../actions/set-stage-seek-to';

import { State, SetStageSeekTo } from '../types';

const setStageSeekTo = (state: State, action: SetStageSeekTo): State => {
  const {
    payload: { time: seekBarAtStage }
  } = action;

  return {
    ...state,
    player: {
      ...state.player,
      seekBarAtStage
    }
  };
};

export default {
  actionType: SET_STAGE_SEEK_TO,
  reducer: setStageSeekTo
};
