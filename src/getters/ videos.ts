import { State } from '~/state';

export const getVideoURL = (
  {
    entities: {
      videos: { byID: videosByID }
    }
  }: State,
  videoID: string
): string => {
  const { [videoID]: video } = videosByID;

  return video !== undefined ? `http://localhost:9000/video/${videoID}` : '';
};
