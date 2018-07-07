import './style.css';
import AugmentedVideoEditor from './augmented-video-player/augmented-video-editor';
import AugmentedVideo from './augmented-video-player/AugmentedVideo';

window.onload = () => {
  const app = document.getElementById('app');

  const editor = new AugmentedVideoEditor();
  editor.source = new AugmentedVideo('http://localhost:3000/video');

  app.appendChild(editor.el);

  const button = document.createElement('button');
  button.innerHTML = 'Do Something';

  button.addEventListener('click', () => {
    editor.play();
  });

  app.appendChild(button);
};
