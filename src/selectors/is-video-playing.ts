import { createSelector } from 'reselect';
import { getPlayback, getUserSeek } from './selectors';

const isVideoPlaying = createSelector(
  [getPlayback, getUserSeek],
  (playback: boolean, userSeek: boolean): boolean => playback && !userSeek
);

export default isVideoPlaying;
