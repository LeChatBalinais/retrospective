import { ActionTemplate } from '~/utils/action-template';
import { State } from '~/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { makeActionCreator } from '~/utils/make-action-creator';
import { getSeekVideo } from '~/getters/player';
import { setSeekVideo } from '~/setters/player';

export type ActionID = 'SAGA_VIDEO_SEEK_DELAY_ENDED';

export const ACTION_ID = 'SAGA_VIDEO_SEEK_DELAY_ENDED';

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const calculateSeekVideo = (): boolean => true;

const partialReducers = [
  createPartialReducer(getSeekVideo, setSeekVideo, calculateSeekVideo)
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State>(partialReducers)
};
