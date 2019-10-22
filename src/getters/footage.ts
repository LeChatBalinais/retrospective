import { State } from '~/state';

export const getVideoDuration = ({ footage: { duration } }: State): number =>
  duration;

export const getVideoURL = ({ footage: { videoURL } }: State): string =>
  videoURL;

export const getSeekPreviewURL = ({
  footage: { seekPreviewURL }
}: State): string => seekPreviewURL;
