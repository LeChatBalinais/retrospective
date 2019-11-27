import { State } from '~/state';

export const setVideoDuration = (state: State, duration: number): State => ({
  ...state,
  player: { ...state.player, duration }
});
