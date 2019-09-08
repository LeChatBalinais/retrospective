import { createSelector } from 'reselect';
import { getPlayerStatus, getUserSeek, getVideoStatus } from './selectors';

const isVideoPlaying = createSelector(
  [getPlayerStatus, getUserSeek, getVideoStatus],
  (playback: boolean, userSeek: boolean): boolean => playback && !userSeek
);

export default isVideoPlaying;
