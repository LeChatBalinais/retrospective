import { TweenLite } from 'gsap';
import Video from './video';
import Augmentation from './augmentation';
import Component from './component';

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
    this.augmentedVideo = augmentedVideo;
    this.video.src = this.augmentedVideo.videoSrc;
    this.augmentation.tagInfos = this.augmentedVideo.tags;
  }

  play() {
    this.video.play();
    TweenLite.ticker.addEventListener('tick', this.update);
  }

  pause() {
    this.video.pause();
    TweenLite.ticker.removeEventListener('tick', this.update);
  }

  update = () => this.augmentation.update(this.video.currentTime);
}

export default AugmentedVideoPlayer;
