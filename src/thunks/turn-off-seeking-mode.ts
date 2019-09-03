import actionCreator from '../actions/set-video-status';
import connect, { mapStateToActionCreator } from '../utils/map-state-to-action';
import {
  State,
  SetVideoStatusPayload,
  PlaybackStatus,
  VideoStatus
} from '../types';
import { getPlayerStatusN } from '../selectors/selectors';

const mapStateToPayload = (state: State): SetVideoStatusPayload => {
  let status: VideoStatus;

  switch (getPlayerStatusN(state)) {
    case PlaybackStatus.Playing:
      status = VideoStatus.Playing;
      break;
    case PlaybackStatus.Paused:
    default:
      status = VideoStatus.Paused;
      break;
  }

  return { status };
};

const turnOffSeekingMode = connect([
  mapStateToActionCreator(actionCreator, mapStateToPayload)
]);

export default turnOffSeekingMode;
