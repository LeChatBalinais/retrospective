import './style.css';
import AugmentedVideoPlayer from './alt-augmented-video-player/components/augmented-video-editor';
// import AugmentedVideo from './augmented-video-player/AugmentedVideo';

window.onload = () => {
  const app = document.getElementById('app');

  const player = new AugmentedVideoPlayer();
  player.videoSource = 'http://localhost:3000/video';

  // player.source = new AugmentedVideo('http://localhost:3000/video');

  app.appendChild(player.el);

  const button = document.createElement('button');
  button.innerHTML = 'play';

  button.addEventListener('click', () => {
    player.play();
  });

  app.appendChild(button);

  const pauseButton = document.createElement('button');
  pauseButton.innerHTML = 'pause';

  pauseButton.addEventListener('click', () => {
    player.pause();
  });

  app.appendChild(pauseButton);

  const addTagButton = document.createElement('button');
  addTagButton.innerHTML = 'add tag';

  addTagButton.addEventListener('click', () => {
    player.startTagAddition();
  });

  app.appendChild(addTagButton);
};
