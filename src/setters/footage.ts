import { State } from '~/state';

export const setVideoDuration = (state: State, duration: number): State => ({
  ...state,
  footage: { ...state.footage, duration }
});
