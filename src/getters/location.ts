import { State } from '~/state/state';

export const getIDofVideoInReferenceEditor = ({
  location: {
    payload: { videoID }
  }
}: State): string => videoID;

export const getVideoURL = ({
  location: {
    payload: { videoID }
  }
}: State): string => `http://localhost:9000/video/${videoID}`;

export const getSeekPreviewURL = ({
  location: {
    payload: { videoID }
  }
}: State): string => `http://localhost:9000/seekpreview/${videoID}`;
