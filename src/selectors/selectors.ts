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

export const getTags = ({ tags: { byID } }: State): { [ID: string]: Tag } =>
  byID;

export const getTagIDs = ({ tags: { allIDs } }: State): string[] => allIDs;

export const getLocalTagIDs = ({ localTags }: State): string[] => localTags;

export const isTagCurrent = ({ currentTag }: State, ID: string): boolean =>
  currentTag === ID;
