import { State, Tag } from '../types/state';

export const getPlayback = ({
  superVideoState: { playback }
}: State): boolean => playback;

export const getUserSeek = ({
  superVideoState: { userSeek }
}: State): boolean => userSeek;

export const getCurrentTime = ({
  superVideoState: { currentTime }
}: State): number => currentTime;

export const getVideoDuration = ({
  superVideoState: { duration }
}: State): number => duration;

export const getCurrentNormalizedTime = (state: State): number =>
  (getCurrentTime(state) / getVideoDuration(state)) * 100;

export const getVideoURL = ({ superVideoState: { url } }: State): string => url;

export const getTags = ({ tags: { byID } }: State): { [ID: string]: Tag } =>
  byID;

export const getTagIDs = ({ tags: { allIDs } }: State): string[] => allIDs;

export const getLocalTagIDs = ({ localTags }: State): string[] => localTags;

export const getBeingEditedTagIDs = ({ draggedTag }: State): string[] => [
  draggedTag
];

export const getVisibleTraceTagIDs = ({ visibleTraceTags }: State): string[] =>
  visibleTraceTags;

export const getCurrentTagID = ({ currentTag }: State): string => currentTag;

export const isTagCurrent = ({ currentTag }: State, ID: string): boolean =>
  currentTag === ID;

export const isPlaceNewTagModeOn = ({
  editorState: { placeNewTagMode }
}: State): boolean => placeNewTagMode;
