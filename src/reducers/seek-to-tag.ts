import { State } from '../types/state';
import { SeekToTag } from '../types/action';

const setCurrentTime = (state: State, action: SeekToTag): State => {
  const { payload: tagID } = action;

  const {
    entities: {
      tags: {
        byID: { [tagID]: tag }
      }
    }
  } = state;

  return {
    ...state,
    player: {
      ...state.player,
      currentTimeNormalized: tag.path[0].time
    }
  };
};

export default setCurrentTime;
