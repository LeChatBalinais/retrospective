import { State } from '~/state';
import { getStageVideoAt, getVideoDuration } from '~/getters/player';

export const getTimeVideoAt = (state: State): number =>
  getStageVideoAt(state) * getVideoDuration(state);
