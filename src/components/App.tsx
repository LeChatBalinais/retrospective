import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Player from '../containers/Player';
import TagTableContainer from '../containers/TagList';
import NewTagButton from '../containers/NewTagButton';

const App = (): JSX.Element => (
  <Provider store={store}>
    <div className="section main-section">
      <div className="columns">
        <div className="column is-8">
          <Player />
        </div>
        <div className="column is-4">
          <NewTagButton />
          <TagTableContainer />
        </div>
      </div>
    </div>
  </Provider>
);

export default App;
