import { ThunkAction, ThunkDispatch } from '../../types/types';
import setTags from '../set-tags';

export default function fetchVideoTagsAsync(videoID: string): ThunkAction {
  return (dispatch: ThunkDispatch): void => {
    fetch(`http://localhost:9000/markers`).then((response): void => {
      response.json().then((data): void => {
        const { tags: tagObject } = data;
        const tags = tagObject;
        dispatch(setTags({ tags }));
      });
    });
  };
}
