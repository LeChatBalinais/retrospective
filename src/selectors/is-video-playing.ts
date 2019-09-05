import { createSelector } from 'reselect';
import { getPlayerStatus, getUserSeek, getVideoStatus } from './selectors';
import { VideoStatus } from '../types';

const isVideoPlaying = createSelector(
  [getPlayerStatus, getUserSeek, getVideoStatus],
  (playback: boolean, userSeek: boolean, videoStatus: VideoStatus): boolean =>
    playback && !userSeek && videoStatus === VideoStatus.Playing
);

export default isVideoPlaying;
