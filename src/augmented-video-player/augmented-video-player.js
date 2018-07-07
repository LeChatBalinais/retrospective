import { TweenLite } from 'gsap';
import Video from './video';
import Augmentation from './augmentation';
import Component from './component';
import SeekBar from './controls/seek-bar';

class AugmentedVideoPlayer extends Component {
  constructor() {
    super();

    this.tag = 'div';
    this.attributes = {
      class: 'augmented-video'
    };

    this.video = new Video();
    this.children.push(this.video);
    this.augmentation = new Augmentation();
    this.children.push(this.augmentation);

    this.el = this.createEl();
  }
  set source(augmentedVideo) {
    this.video.el.addEventListener('durationchange', () => {
      this.seekBar = new SeekBar(this.video.duration, time => {
        this.video.currentTime = time;
      });
      this.children.push(this.seekBar);

      this.connectChild(this.seekBar);
    });

    this.video.src = augmentedVideo.videoSrc;
    this.augmentation.tagInfos = augmentedVideo.tags;
  }

  play() {
    this.video.play();
    TweenLite.ticker.addEventListener('tick', this.update);
  }

  pause() {
    this.video.pause();
    TweenLite.ticker.removeEventListener('tick', this.update);
  }

  update = () => {
    this.augmentation.update(this.video.currentTime);
    this.seekBar.update(this.video.currentTime);
  };
}

export default AugmentedVideoPlayer;
