import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { State } from '../../types/state';
import { Action } from '../../types/action';
import makeGetTag from '../../selectors/get-tag';
import { removeTag } from '../actionCreators';

const getTag = makeGetTag();

export default function deleteTagAsync(
  ID: string
): ThunkAction<void, State, null, Action> {
  return (
    dispatch: ThunkDispatch<State, {}, Action>,
    getState: () => State
  ): void => {
    const { globalID } = getTag(getState(), ID);
    fetch(`http://localhost:9000/deleteTag`, {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ID: globalID })
    }).then((response): void => {
      if (response.ok) {
        dispatch(removeTag(ID));
      }
    });
  };
}
