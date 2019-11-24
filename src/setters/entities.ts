import { State, Tags } from '~/state';
import { Videos } from '~/state/videos';

export const setTags = (state: State, tags: Tags): State => ({
  ...state,
  entities: { ...state.entities, tags }
});

export const setVideos = (state: State, videos: Videos): State => ({
  ...state,
  entities: { ...state.entities, videos }
});
