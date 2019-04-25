import { State } from '../types/state';
import { FetchAllVideoMarks } from '../types/action';

const setUserSeek = (state: State, action: FetchAllVideoMarks): State => {
  const { payload: markers } = action;

  return {
    ...state,
    tags: markers
  };
};

export default setUserSeek;
