import {
  getStageVideoAt,
  getLastRequestedStage,
  getStageSeekPreviewAt
} from '~/getters/player';
import { State } from '~/state';

export const getStagePlayerAt = (state: State): number => {
  const stageVideoAt = getStageVideoAt(state);
  const stageSeekPreviewAt = getStageSeekPreviewAt(state);
  const lastRequestedStage = getLastRequestedStage(state);

  if (lastRequestedStage !== undefined && stageVideoAt !== lastRequestedStage) {
    return stageSeekPreviewAt;
  }
  return stageVideoAt;
};
