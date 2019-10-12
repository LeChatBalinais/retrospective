import { State, Tags } from '~/state';

export const setTags = (state: State, tags: Tags): State => ({
  ...state,
  entities: { ...state.entities, tags }
});
