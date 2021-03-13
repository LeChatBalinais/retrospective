import { getStagePlayerAt } from './get-stage-player-at';
import { getVideoDuration } from '~/getters/player';
import { State } from '~/state';

export const getTimePlayerAt = (state: State): number =>
  getStagePlayerAt(state) * getVideoDuration(state);
