import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type PlayerLoadedType = 'PLAYER_LOADED';

export type PlayerLoaded = SimpleActionTemplate<PlayerLoadedType, {}>;

export const PLAYER_LOADED = 'PLAYER_LOADED';

export function playerLoaded(): PlayerLoaded {
  return { type: PLAYER_LOADED, payload: {} };
}
