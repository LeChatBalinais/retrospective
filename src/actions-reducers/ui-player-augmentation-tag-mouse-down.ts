import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State, PlaybackStatus } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { getTagBeingEditedID, getCurrentTagID } from '~/getters/tag-editor';
import { getPlaybackStatus } from '~/getters/player';
import { setPlaybackStatus } from '~/setters/player';
import { setTagBeingEditedID, setCurrentTagID } from '~/setters/tag-editor';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'MOUSE_DOWN_ON_TAG';
export const ACTION_ID = 'MOUSE_DOWN_ON_TAG';

export interface Payload {
  tagID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const getNewCurrentTagID = (tagID: string): string => tagID;

const getNewTagBeingEditedID = (tagID: string, currentTagID: string): string =>
  tagID === currentTagID ? tagID : undefined;

const getNewPlaybackStatus = (
  currentTagID: string,
  prevPlaybackStatus: PlaybackStatus,
  tagID: string
): PlaybackStatus =>
  currentTagID !== tagID ? prevPlaybackStatus : PlaybackStatus.Playing;

export const reducer = createReducer(ACTION_ID, [
  [
    getCurrentTagID,
    setCurrentTagID,
    mapStateToDeterminer(getNewCurrentTagID, [getTagID])
  ],
  [
    getTagBeingEditedID,
    setTagBeingEditedID,
    mapStateToDeterminer(getNewTagBeingEditedID, [getTagID, getCurrentTagID])
  ],

  [
    getPlaybackStatus,
    setPlaybackStatus,
    mapStateToDeterminer(getNewPlaybackStatus, [
      getCurrentTagID,
      getPlaybackStatus,
      getTagID
    ])
  ]
]);
