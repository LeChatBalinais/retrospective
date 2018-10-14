// @flow
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AugmentedVideoPlayerContainer from '../containers/AugmentedVideoPlayer';

type Props = {
  playback: boolean
};

type State = {};

class App extends React.Component<Props, State> {
  render() {
    if (this.player) {
      const { playback } = this.props;
      if (playback) {
        this.player.play();
      } else {
        this.player.pause();
      }
    }

    return (
      <Provider store={store}>
        <AugmentedVideoPlayerContainer />
      </Provider>
    );
  }
}

export default App;
