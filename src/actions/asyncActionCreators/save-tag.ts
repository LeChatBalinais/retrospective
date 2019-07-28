import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from '../../types/state';
import { Action } from '../../types/action';
import fetchVideoTagsAsync from './fetch-video-tags';
import makeGetTag from '../../selectors/get-tag';

const getTag = makeGetTag();

export default function saveTagAsync(
  ID: string
): ThunkAction<void, State, null, Action> {
  return (dispatch: Dispatch<any>, getState: () => State): void => {
    fetch(`http://localhost:9000/addTag`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tagID: ID, tag: getTag(getState(), ID) })
    }).then(
      (response): void => {
        if (response.ok) {
          dispatch(fetchVideoTagsAsync('hello'));
        }
      }
    );
  };
}
