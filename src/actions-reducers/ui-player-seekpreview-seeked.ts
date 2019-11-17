import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { VideoStatus } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import {
  getSeekPreviewStatus,
  getStageSeekPreviewAt,
  getStageSeekPreviewSeekingTo,
  isDelayOn
} from '~/getters/player';
import {
  setStageSeekPreviewAt,
  setSeekPreviewStatus,
  setStageSeekPreviewSeekingTo,
  setDelayOn
} from '~/setters/player';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'UI_PLAYER_SEEKPREVIEW_SEEKED';
export const ACTION_ID = 'UI_PLAYER_SEEKPREVIEW_SEEKED';

export type Payload = undefined;

export type Action = ActionTemplate<ActionID>;

export const actionCreator = makeActionCreator<ActionID>(ACTION_ID);

const getNewStageSeekPreviewAt = (stageVideoSeekingTo: number): number =>
  stageVideoSeekingTo;

const getNewSeekPreviewStatus = (): VideoStatus => VideoStatus.Paused;

const getNewStageSeekPreviewSeekingTo = (): number => undefined;

const getNewDelayOn = (): boolean => true;

export const reducer = createReducer(ACTION_ID, [
  [isDelayOn, setDelayOn, mapStateToDeterminer(getNewDelayOn)],
  [
    getStageSeekPreviewSeekingTo,
    setStageSeekPreviewSeekingTo,
    mapStateToDeterminer(getNewStageSeekPreviewSeekingTo)
  ],
  [
    getSeekPreviewStatus,
    setSeekPreviewStatus,
    mapStateToDeterminer(getNewSeekPreviewStatus)
  ],
  [
    getStageSeekPreviewAt,
    setStageSeekPreviewAt,
    mapStateToDeterminer(getNewStageSeekPreviewAt, [
      getStageSeekPreviewSeekingTo
    ])
  ]
]);
