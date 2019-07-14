import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from '../../types/state';
import Tag from '../../types/tag';
import { Action } from '../../types/action';
import fetchVideoTagsAsync from './fetch-video-tags';

export default function saveTagAsync(
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
        }
      }
    );
  };
}
