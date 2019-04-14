import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Player from '../containers/PlayerContainer';

const App = () => (
  <Provider store={store}>
    <Player />
  </Provider>
);

export default App;
