import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { getVisibleTraceTagIDs } from '~/getters/tag-editor';
import {
  setVisibleTraceTagIDs,
  setTagTraceVisible
} from '~/setters/tag-editor';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';

export type ActionID = 'TAG_TRACE_VISIBILITY_CHECKBOX_TOGGLED';
export const ACTION_ID = 'TAG_TRACE_VISIBILITY_CHECKBOX_TOGGLED';

export interface Payload {
  tagID: string;
  visible: boolean;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getTagID = (state: State, { tagID }: Payload): string => tagID;

const isVisible = (state: State, { visible }: Payload): boolean => visible;

const getNewVisibleTraceTagIDs = (
  tagID: string,
  visible: boolean,
  prevVisibleTraceTagIDs: string[]
): string[] => setTagTraceVisible(prevVisibleTraceTagIDs, tagID, visible);

export const reducer = createReducer(ACTION_ID, [
  [
    getVisibleTraceTagIDs,
    setVisibleTraceTagIDs,
    mapStateToDeterminer(getNewVisibleTraceTagIDs, [
      getTagID,
      isVisible,
      getVisibleTraceTagIDs
    ])
  ]
]);
