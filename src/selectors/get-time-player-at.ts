import { getStagePlayerAt } from './get-stage-player-at';
import { getVideoDuration } from '~/getters/footage';
import { State } from '~/state';

export const getTimePlayerAt = (state: State): number =>
  getStagePlayerAt(state) * getVideoDuration(state);
