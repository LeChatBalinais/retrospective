// import { TweenMax, TweenLite } from 'gsap';
import './style.css';
import AugmentedVideoPlayer from './augmented-video-player/AugmentedVideoPlayer';
import AugmentedVideoEditor from './augmented-video-player/AugmentedVideoEditor';
import AugmentedVideo from './augmented-video-player/AugmentedVideo';

window.onload = () => {
  const app = document.getElementById('app');

  const player = new AugmentedVideoPlayer();

  const source = new AugmentedVideo('http://localhost:3000/video');

  source.addTag({
    id: '534526',
    start: 1,
    duration: 10,
    initialPosition: { x: 10, y: 10 },
    path: [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 },
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 }
    ]
  });

  source.addTag({
    id: '53526',
    start: 1,
    duration: 10,
    initialPosition: { x: 110, y: 110 },
    path: [
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 },
      { x: 0, y: 0 },
      { x: 100, y: 0 },
      { x: 100, y: 100 },
      { x: 0, y: 100 }
    ]
  });

  player.source = source;

  const editor = new AugmentedVideoEditor();
  editor.source = source;

  app.appendChild(editor.player);

  player.play();
};
