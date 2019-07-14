import React from 'react';
import store from '../store';
import {
  addNewTag,
  setPlaceNewTagMode,
  setPlayback
} from '../actions/actionCreators';
import NewTagLayerComponent from '../components/NewTagLayer';

const NewTagLayer = (): JSX.Element => (
  <NewTagLayerComponent
    onClick={(x: number, y: number): void => {
      store.dispatch(setPlayback(false));
      store.dispatch(setPlaceNewTagMode(false));
      store.dispatch(addNewTag(x, y));
    }}
  />
);

export default NewTagLayer;
