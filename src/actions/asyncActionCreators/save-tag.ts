import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from '../../types/state';
import { Action } from '../../types/action';
import makeGetTag from '../../selectors/get-tag';
import { setTagGlobalID } from '../actionCreators';

const getTag = makeGetTag();

export default function saveTagAsync(
  ID: string
): ThunkAction<void, State, null, Action> {
  return (
    dispatch: ThunkDispatch<State, {}, Action>,
    getState: () => State
  ): void => {
    fetch(`http://localhost:9000/addTag`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tagID: ID, tag: getTag(getState(), ID) })
    }).then((response): void => {
      if (response.ok) {
        response.json().then((data): void => {
          const { id: globalID } = data;
          dispatch(setTagGlobalID(ID, globalID));
        });
      }
    });
  };
}
