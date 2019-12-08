import { State, Tags } from '~/state';
import { Videos } from '~/state/videos';
import { Players } from '~/state/experimental/players';

export const setTags = (state: State, tags: Tags): State => ({
  ...state,
  entities: { ...state.entities, tags }
});

export const setVideos = (state: State, videos: Videos): State => ({
  ...state,
  entities: { ...state.entities, videos }
});

export const setPlayersTable = (state: State, players: Players): State => ({
  ...state,
  entities: { ...state.entities, players }
});
