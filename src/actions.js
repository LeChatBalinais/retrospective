// @flow

import type { Tags } from './state-types';

export type SetPlaybackAction = { type: 'SET_PLAYBACK', payload: boolean };
export type SetPlaceNewTagModeAction = {
  type: 'SET_PLACE_NEW_TAG_MODE',
  payload: boolean
};
export type SetCurrentTimeAction = {
  type: 'SET_CURRENT_TIME',
  payload: number
};
export type SetDurationAction = { type: 'SET_DURATION', payload: number };
export type SetUserSeekAction = { type: 'SET_USER_SEEK', payload: boolean };
export type AddNewTagAction = {
  type: 'ADD_NEW_TAG',
  payload: { x: number, y: number }
};
export type SetTagDraggedAction = {
  type: 'SET_TAG_DRAGGED',
  payload: { ID: string, dragged: boolean }
};
export type UpdateTagPathAction = {
  type: 'UPDATE_TAG_PATH',
  payload: { ID: string, x: number, y: number }
};
export type FetchAllVideoMarks = {
  type: 'FETCH_ALL_VIDEO_MARKS',
  payload: { markers: Tags }
};

export type Action =
  | SetPlaybackAction
  | SetPlaceNewTagModeAction
  | SetCurrentTimeAction
  | SetDurationAction
  | SetUserSeekAction
  | AddNewTagAction
  | SetTagDraggedAction
  | UpdateTagPathAction
  | FetchAllVideoMarks;

export const SET_PLAYBACK = 'SET_PLAYBACK';
export const SET_PLACE_NEW_TAG_MODE = 'SET_PLACE_NEW_TAG_MODE';
export const SET_CURRENT_TIME = 'SET_CURRENT_TIME';
export const SET_DURATION = 'SET_DURATION';
export const SET_USER_SEEK = 'SET_USER_SEEK';
export const ADD_NEW_TAG = 'ADD_NEW_TAG';
export const SET_TAG_DRAGGED = 'SET_TAG_DRAGGED';
export const UPDATE_TAG_PATH = 'UPDATE_TAG_PATH';
export const FETCH_ALL_VIDEO_MARKS = 'FETCH_ALL_VIDEO_MARKS';
