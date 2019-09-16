import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type PlayButtonClickedType = 'PLAY_BUTTON_CLICKED';
export type PlayButtonClicked = SimpleActionTemplate<PlayButtonClickedType, {}>;

export const PLAY_BUTTON_CLICKED = 'PLAY_BUTTON_CLICKED';

export function playButtonClicked(): PlayButtonClicked {
  return { type: PLAY_BUTTON_CLICKED, payload: {} };
}
