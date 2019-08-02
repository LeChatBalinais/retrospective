import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { State } from '../../types/state';
import { addFetchedTags } from '../actionCreators';
import { AddFetchedTags } from '../../types/action';

export default function fetchVideoTagsAsync(
  videoID: string
): ThunkAction<void, State, null, AddFetchedTags> {
  return (dispatch: Dispatch): void => {
    fetch(`http://localhost:9000/markers`).then((response): void => {
      response.json().then((data): void => {
        const { tags: tagObject } = data;
        const tags = tagObject;
        dispatch(addFetchedTags(tags));
      });
    });
  };
}
