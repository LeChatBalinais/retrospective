import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, SeekingStatus, PlaneTimePoint } from '~/state';
import { createReducer } from '~/utils/experimental/create-reducer';
import { getCurrentTagID } from '~/getters/tag-editor';
import { getVideoDuration } from '~/getters/footage';
import { setCurrentTagID } from '~/setters/tag-editor';
import { setLastRequestedStage, setSeekingStatus } from '~/setters/player';
import {
  getLastRequestedStage,
  getStageVideoAt,
  getSeekingStatus
} from '~/getters/player';
import { getTagPath } from '~/getters/tags';
import { timeIsCloseEnough } from '~/utils/time-is-close-enough';
import { mapStateToDeterminer } from '~/utils/experimental/map-state-to-determiner';

export type ActionID = 'TAG_ROW_CLICKED';
export const ACTION_ID = 'TAG_ROW_CLICKED';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const getPath = (state: State, { tagID }: Payload): PlaneTimePoint[] =>
  getTagPath(state, tagID);

const getNewCurrentTagID = (tagID: string): string => tagID;

const getNewLastRequestedStage = (
  stageVideoAt: number,
  path: PlaneTimePoint[],
  duration: number,
  prevLastRequestedStage: number
): number => {
  if (path.length === 0) return prevLastRequestedStage;

  const lastRequestedStage = path[0].time / duration;

  if (timeIsCloseEnough(lastRequestedStage, stageVideoAt)) return undefined;

  return lastRequestedStage;
};

const getNewSeekingStatus = (
  stageVideoAt: number,
  path: PlaneTimePoint[],
  duration: number,
  prevSeekingStatus: SeekingStatus
): SeekingStatus => {
  if (path.length === 0) return prevSeekingStatus;
  const lastRequestedStage = path[0].time / duration;

  if (timeIsCloseEnough(lastRequestedStage, stageVideoAt))
    return prevSeekingStatus;

  return SeekingStatus.Seeking;
};

export const reducer = createReducer(ACTION_ID, [
  [
    getCurrentTagID,
    setCurrentTagID,
    mapStateToDeterminer(getNewCurrentTagID, [getTagID])
  ],
  [
    getLastRequestedStage,
    setLastRequestedStage,
    mapStateToDeterminer(getNewLastRequestedStage, [
      getStageVideoAt,
      getPath,
      getVideoDuration,
      getLastRequestedStage
    ])
  ],
  [
    getSeekingStatus,
    setSeekingStatus,
    mapStateToDeterminer(getNewSeekingStatus, [
      getStageVideoAt,
      getPath,
      getVideoDuration,
      getSeekingStatus
    ])
  ]
]);
