import { State } from '../types/state';
import Tag from '../types/tag';

export const getPlayback = ({
  superVideoState: { playback }
}: State): boolean => playback;

export const getUserSeek = ({
  superVideoState: { userSeek }
}: State): boolean => userSeek;

export const getCurrentTime = ({
  superVideoState: { currentTime }
}: State): number => currentTime;

export const getVideoURL = ({ superVideoState: { url } }: State): string => url;

export const getTagsByID = ({ tags: { byID } }: State): { [ID: string]: Tag } =>
  byID;

export const getTag = ({ tags: { byID } }: State, ID: string): Tag => {
  return byID[ID];
};
