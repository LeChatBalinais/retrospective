import { getVideoDuration } from '~/getters/footage';
import { getLastRequestedStage } from '~/getters/player';
import { State } from '~/state';

export const getLastRequestedTime = (state: State): number =>
  getLastRequestedStage(state) * getVideoDuration(state);
