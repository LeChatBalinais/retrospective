import actionCreator from '../actions/video-start-seeking-to-stage';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import { getVideoDuration } from '../selectors/selectors';

import { State, VideoStartSeekingToStagePayload } from '../types';

export interface VideoStartSeekingToTimePayload {
  time: number;
}

const mapStateToPayload = (
  state: State,
  { time }: VideoStartSeekingToTimePayload
): VideoStartSeekingToStagePayload => {
  return { stage: time / getVideoDuration(state) };
};

export const setCurrentTimeMappedAction = mapStateToActionCreator(
  actionCreator,
  mapStateToPayload
);

const videoStartsSeekingToTime = connect([setCurrentTimeMappedAction]);

export default videoStartsSeekingToTime;
