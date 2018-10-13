import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import AugmentedVideoPlayer from '../augmented-video-player/components/augmented-video-editor';
import ControlPanel from './ControlPanel';

class App extends React.Component {
  componentDidMount() {
    const app = this.div;

    const player = new AugmentedVideoPlayer();
    player.videoSource = 'http://localhost:3000/video';

    app.appendChild(player.el);

    // const button = document.createElement('button');
    // button.innerHTML = 'play';

    // button.addEventListener('click', () => {
    //   player.play();
    // });

    // app.appendChild(button);

    // const pauseButton = document.createElement('button');
    // pauseButton.innerHTML = 'pause';

    // pauseButton.addEventListener('click', () => {
    //   player.pause();
    // });

    // app.appendChild(pauseButton);

    // const addTagButton = document.createElement('button');
    // addTagButton.innerHTML = 'add tag';

    // addTagButton.addEventListener('click', () => {
    //   player.addTag();
    // });

    // app.appendChild(addTagButton);
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <div
            className="app"
            ref={div => {
              this.div = div;
            }}
          />
          <ControlPanel />
        </div>
      </Provider>
    );
  }
}

export default App;
