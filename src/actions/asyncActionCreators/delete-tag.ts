import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from '../../types/state';
import { Action } from '../../types/action';
import fetchVideoTagsAsync from './fetch-video-tags';

export default function deleteTagAsync(
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
