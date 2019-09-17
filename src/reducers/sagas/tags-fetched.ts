import { TAGS_FETCHED } from '~/actions';
import { State, TagsFetchedPayload, TagsFetchedType, Tags } from '~/types';
import createReducer from '~/utils/create-reducer';
import { createPartialReducer } from '~/utils/create-partial-reducer';
import { setTags } from '~/reducers/base';
import { getTags as getPrevTags } from '~/selectors/common';

const getTags = (state: State, { tags }: TagsFetchedPayload): Tags => tags;

const calculateTags = (tags: Tags): Tags => tags;

const partialReducers = [
  createPartialReducer(getPrevTags, setTags, calculateTags, [getTags])
];

export default {
  actionType: TAGS_FETCHED,
  reducer: createReducer<TagsFetchedType, State, TagsFetchedPayload>(
    partialReducers
  )
};
