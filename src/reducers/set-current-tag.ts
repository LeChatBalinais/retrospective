import { State } from '../types/state';
import { SetCurrentTag } from '../types/action';

const setCurrentTag = (state: State, action: SetCurrentTag): State => {
  const { payload: ID } = action;

  return {
    ...state,
    currentTag: ID
  };
};

export default setCurrentTag;