import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type PlayButtonClicked = SimpleActionTemplate<'PLAY_BUTTON_CLICKED', {}>;

export const PLAY_BUTTON_CLICKED = 'PLAY_BUTTON_CLICKED';

export function playButtonClicked(): PlayButtonClicked {
  return { type: PLAY_BUTTON_CLICKED, payload: {} };
}

export const PlayButtonClicked = undefined;
