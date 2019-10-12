import { State } from '~/state';
import { getStageVideoAt } from '~/getters/player';
import { getVideoDuration } from '~/getters/footage';

export const getTimeVideoAt = (state: State): number =>
  getStageVideoAt(state) * getVideoDuration(state);
