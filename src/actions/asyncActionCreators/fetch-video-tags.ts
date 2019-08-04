import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from '../../types/state';
import { setTags } from '../actionCreators';
import { SetTags } from '../../types/action';

export default function fetchVideoTagsAsync(
  videoID: string
): ThunkAction<void, State, null, SetTags> {
  return (dispatch: Dispatch): void => {
    fetch(`http://localhost:9000/markers`).then((response): void => {
      response.json().then((data): void => {
        const { tags: tagObject } = data;
        const tags = tagObject;
        dispatch(setTags(tags));
      });
    });
  };
}
