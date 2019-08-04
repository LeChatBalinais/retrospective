import { State } from '../types/state';
import { SetTagTraceVisible } from '../types/action';

const setTagTraceVisible = (
  state: State,
  action: SetTagTraceVisible
): State => {
  const {
    payload: { ID, visible }
  } = action;

  let {
    tagEditor: { tagsWithVisibleTrace }
  } = state;

  if (visible) {
    if (!tagsWithVisibleTrace.includes(ID)) {
      tagsWithVisibleTrace = [...tagsWithVisibleTrace, ID];
    }
  } else if (tagsWithVisibleTrace.includes(ID)) {
    tagsWithVisibleTrace = tagsWithVisibleTrace.filter(
      (value: string): boolean => value !== ID
    );
  }

  return {
    ...state,
    tagEditor: { ...state.tagEditor, tagsWithVisibleTrace }
  };
};

export default setTagTraceVisible;
