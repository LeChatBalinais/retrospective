import { State } from '~/state';

export const getVideoDuration = ({ footage: { duration } }: State): number =>
  duration;

export const getVideoURL = ({ footage: { url } }: State): string => url;
