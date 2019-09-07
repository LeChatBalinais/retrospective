import { SimpleActionTemplate } from '../types/actions/simple-action-template';

export interface VideoStartSeekingToStagePayload {
  stage: number;
}

export type VideoStartSeekingToStage = SimpleActionTemplate<
  'VIDEO_START_SEEKING_TO_STAGE',
  VideoStartSeekingToStagePayload
>;

export const VIDEO_START_SEEKING_TO_STAGE = 'VIDEO_START_SEEKING_TO_STAGE';

export default function videoStartSeekingToStage(
  payload: VideoStartSeekingToStagePayload
): VideoStartSeekingToStage {
  return { type: VIDEO_START_SEEKING_TO_STAGE, payload };
}

export const VideoStartSeekingToStagePayload = undefined;
export const VideoStartSeekingToStage = undefined;
