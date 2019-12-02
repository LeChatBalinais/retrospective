import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, PlaybackStatus } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { getDefaultReducedVal } from '~/utils/get-default-reduced-val';
import { isPlaceNewTagModeOn } from '~/getters/tag-editor';
import { getPlaybackStatus, getStageVideoAt } from '~/getters/player';
import { setPlaybackStatus } from '~/setters/player';
import { setPlacingNewTagMode } from '~/setters/tag-editor';
import { addNewTag } from '~/setters/tags';
import { getVideoDuration } from '~/getters/footage';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'NEW_TAG_LAYER_CLICKED';
export const ACTION_ID = 'NEW_TAG_LAYER_CLICKED';

export interface Payload {
  x: number;
  y: number;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getPosition = (
  state: State,
  { x, y }: Payload
): { x: number; y: number } => ({ x, y });

const getCurrentVideoID = ({ location: { payload: { videoID } } }: State): string => videoID

const getNewPlaybackStatus = (): PlaybackStatus => PlaybackStatus.Paused;

const getNewPlacingNewTagMode = (): boolean => false;

const getNewTag = (
  videoID: string,
  stage: number,
  duration: number,
  { x, y }: { x: number; y: number }
): { videoID: string, time: number; x: number; y: number } => {
  return { videoID, time: stage * duration, x, y };
};

export const reducer = createReducer(ACTION_ID, [
  [
    getPlaybackStatus,
    setPlaybackStatus,
    mapStateToDeterminer(getNewPlaybackStatus)
  ],
  [
    isPlaceNewTagModeOn,
    setPlacingNewTagMode,
    mapStateToDeterminer(getNewPlacingNewTagMode)
  ],

  [
    getDefaultReducedVal,
    addNewTag,
    mapStateToDeterminer(getNewTag, [
      getCurrentVideoID,
      getStageVideoAt,
      getVideoDuration,
      getPosition
    ])
  ]
]);
