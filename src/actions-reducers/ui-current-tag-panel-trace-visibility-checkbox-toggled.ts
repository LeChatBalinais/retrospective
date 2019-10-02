import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { State } from '~/types/state';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { getVisibleTraceTagIDs } from '~/selectors/common';
import { setVisibleTraceTagIDs, setTagTraceVisible } from '~/reducers/base';

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

const calculateVisibleTraceTagIDs = (
  tagID: string,
  visible: boolean,
  prevVisibleTraceTagIDs: string[]
): string[] => setTagTraceVisible(prevVisibleTraceTagIDs, tagID, visible);

const partialReducers = [
  createPartialReducer(
    getVisibleTraceTagIDs,
    setVisibleTraceTagIDs,
    calculateVisibleTraceTagIDs,
    [getTagID, isVisible, getVisibleTraceTagIDs]
  )
];

export const reducer = {
  [ACTION_ID]: createReducer<ActionID, State, Payload>(partialReducers)
};
