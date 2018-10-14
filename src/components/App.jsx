// @flow
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AugmentedVideoPlayerContainer from '../containers/AugmentedVideoPlayer';

const App = () => (
  <Provider store={store}>
    <AugmentedVideoPlayerContainer />
  </Provider>
);

export default App;
