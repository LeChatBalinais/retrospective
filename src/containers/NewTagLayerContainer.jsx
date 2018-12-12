// @flow
import React from 'react';
import store from '../store';
import { addNewTag, setPlaceNewTagMode, setPlayback } from '../actionCreators';
import NewTagLayer from '../components/NewTagLayer';

const NewTagLayerContainer = () => (
  <NewTagLayer
    onClick={(x: number, y: number) => {
      store.dispatch(setPlayback(false));
      store.dispatch(setPlaceNewTagMode(false));
      store.dispatch(addNewTag(x, y));
    }}
  />
);

export default NewTagLayerContainer;
