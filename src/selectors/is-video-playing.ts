import { createSelector } from 'reselect';
import { getPlayerStatus, getUserSeek } from './selectors';

const isVideoPlaying = createSelector(
  [getPlayerStatus, getUserSeek],
  (playback: boolean, userSeek: boolean): boolean => playback && !userSeek
);

export default isVideoPlaying;
