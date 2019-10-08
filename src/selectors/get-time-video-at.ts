import { State } from '~/state';
import { getStageVideoAt } from './common/player';
import { getVideoDuration } from './common/footage';

export const getTimeVideoAt = (state: State): number =>
  getStageVideoAt(state) * getVideoDuration(state);
