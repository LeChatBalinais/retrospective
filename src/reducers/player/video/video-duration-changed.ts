import { VIDEO_DURATION_CHANGED, VideoDurationChanged } from '~/actions';
import { State } from '~/types';

const videoDurationChanged = (
  state: State,
  { payload: { duration } }: VideoDurationChanged
): State => {
  return {
    ...state,
    footage: {
      ...state.footage,
      duration
    }
  };
};

export default {
  actionType: VIDEO_DURATION_CHANGED,
  reducer: videoDurationChanged
};
