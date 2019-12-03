import { State } from '~/state/state';

export const getIDofVideoInReferenceEditor = ({
  location: {
    payload: { videoID }
  }
}: State): string => videoID;
