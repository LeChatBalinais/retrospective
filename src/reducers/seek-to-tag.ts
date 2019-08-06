import { State } from '../types/state';
import { SeekToTag } from '../types/action';

const setCurrentTime = (state: State, action: SeekToTag): State => {
  const {
    payload: { ID }
  } = action;

  const {
    entities: {
      tags: {
        byID: { [ID]: tag }
      }
    },
    footage: { duration }
  } = state;

  return {
    ...state,
    player: {
      ...state.player,
      currentTimeNormalized: tag.path[0].time / duration
    }
  };
};

export default setCurrentTime;
