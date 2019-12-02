import { State } from '~/state';

export const getVideoDuration = ({ player: { duration } }: State): number =>
  duration;

export const getVideoURL = ({ location: { payload: { videoID } } }: State): string => `http://localhost:9000/video/${videoID}`;

export const getSeekPreviewURL = ({ location: { payload: { videoID } } }: State): string => `http://localhost:9000/seekpreview/${videoID}`;
