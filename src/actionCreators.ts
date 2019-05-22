import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import {
  SET_PLAYBACK,
  SET_PLACE_NEW_TAG_MODE,
  SET_CURRENT_TIME,
  SET_DURATION,
  SET_USER_SEEK,
  ADD_NEW_TAG,
  SET_TAG_DRAGGED,
  UPDATE_TAG_PATH,
  ADD_FETCHED_TAGS
} from './actions';

import {
  SetPlayback,
  SetPlaceNewTagMode,
  SetCurrentTime,
  SetUserSeek,
  SetDuration,
  AddNewTag,
  SetTagDragged,
  UpdateTagPath,
  AddFetchedTags,
  Action
} from './types/action';
import { Tags, State } from './types/state';
import Tag from './types/tag';

export function setPlayback(on: boolean): SetPlayback {
  return { type: SET_PLAYBACK, payload: on };
}

export function setPlaceNewTagMode(on: boolean): SetPlaceNewTagMode {
  return { type: SET_PLACE_NEW_TAG_MODE, payload: on };
}

export function setCurrentTime(currentTime: number): SetCurrentTime {
  return { type: SET_CURRENT_TIME, payload: currentTime };
}

export function setDuration(duration: number): SetDuration {
  return { type: SET_DURATION, payload: duration };
}

export function setUserSeek(on: boolean): SetUserSeek {
  return { type: SET_USER_SEEK, payload: on };
}

export function addNewTag(x: number, y: number): AddNewTag {
  return { type: ADD_NEW_TAG, payload: { x, y } };
}

export function setTagDragged(ID: string, dragged: boolean): SetTagDragged {
  return { type: SET_TAG_DRAGGED, payload: { ID, dragged } };
}

export function updateTagPath(ID: string, x: number, y: number): UpdateTagPath {
  return { type: UPDATE_TAG_PATH, payload: { ID, x, y } };
}

export function addFetchedTags(markers: Tags): AddFetchedTags {
  return { type: ADD_FETCHED_TAGS, payload: markers };
}

export function fetchVideoTagsAsync(
  videoID: string
): ThunkAction<void, State, null, AddFetchedTags> {
  return (dispatch: Dispatch): void => {
    console.log(videoID);
    fetch(`http://localhost:9000/markers`).then(
      (response): void => {
        response.json().then(
          (data): void => {
            console.log(data);
            const { tags: tagObject } = data;
            const tags = tagObject;
            console.log(tags);
            dispatch(addFetchedTags(tags));
          }
        );
      }
    );
  };
}

export function saveTagAsync(
  tagID: string,
  tag: Tag
): ThunkAction<void, State, null, Action> {
  return (dispatch: Dispatch<any>): void => {
    fetch(`http://localhost:9000/addTag`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tagID, tag })
    }).then(
      (response): void => {
        if (response.ok) {
          dispatch(fetchVideoTagsAsync('hello'));
          console.log('udpate');
        }
      }
    );
  };
}

export function deleteTagAsync(
  ID: string
): ThunkAction<void, State, null, Action> {
  return (dispatch: Dispatch<any>): void => {
    fetch(`http://localhost:9000/deleteTag`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ID })
    }).then(
      (response): void => {
        if (response.ok) {
          dispatch(fetchVideoTagsAsync('hello'));
        }
      }
    );
  };
}
