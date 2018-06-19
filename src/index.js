import './style.css';
import AugmentedVideoPlayer from './augmented-video-player/AugmentedVideoPlayer';
import AugmentedVideoEditor from './augmented-video-player/AugmentedVideoEditor';
import AugmentedVideo from './augmented-video-player/AugmentedVideo';

window.onload = () => {
  const app = document.getElementById('app');

  const editor = new AugmentedVideoEditor();
  editor.source = new AugmentedVideo('http://localhost:3000/video');

  editor.onTagCreated = path => {
    const newPath = path.map((point, index, array) => ({
      x: point.x - array[0].x,
      y: point.y - array[0].y
    }));

    const player = new AugmentedVideoPlayer();

    const source = new AugmentedVideo('http://localhost:3000/video');

    source.addTag({
      id: '534526',
      start: path[0].time,
      duration: path[path.length - 1].time - path[0].time,
      initialPosition: { x: path[0].x, y: path[0].y },
      path: newPath
    });

    app.removeChild(editor.player);
    app.appendChild(player.player);
    player.source = source;
    player.play();
  };

  app.appendChild(editor.player);
  // editor.do();
  // editor.init();
};
