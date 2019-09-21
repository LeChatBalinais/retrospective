import { ActionTemplate } from '~/types/action-template';

export type PlayerLoadedType = 'PLAYER_LOADED';

export type PlayerLoaded = ActionTemplate<PlayerLoadedType, {}>;

export const PLAYER_LOADED = 'PLAYER_LOADED';

export function playerLoaded(): PlayerLoaded {
  return { type: PLAYER_LOADED, payload: {} };
}
