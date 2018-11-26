// @flow
import React from 'react';
import store from '../store';
import { addNewTag, setPlaceNewTagMode } from '../actionCreators';
import NewTagLayer from '../components/NewTagLayer';

const NewTagLayerContainer = () => (
  <NewTagLayer
    onClick={(x: number, y: number) => {
      store.dispatch(addNewTag(x, y));
      store.dispatch(setPlaceNewTagMode(false));
    }}
  />
);

export default NewTagLayerContainer;
