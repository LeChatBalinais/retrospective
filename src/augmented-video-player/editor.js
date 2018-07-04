import Component from './component';
import Video from './video';
import Augmentation from './augmentation';

class AugmentedVideoPlayer extends Component {
  constructor() {
    super();
    this.tag = 'div';
    this.attributes = {
      class: 'augmented-video'
    };

    this.augmentedVideo = {};

    this.video = new Video();
    this.children.push(this.video);

    this.el = this.createEl();

    this.video.el.onclick = this.do;
  }

  set source(augmentedVideo) {
    this.augmentedVideo = augmentedVideo;
    this.video.src = this.augmentedVideo.videoSrc;
  }

  set onTagCreated(onTagCreated) {
    this.onTagCrtd = onTagCreated;
  }

  do = e => {
    this.augmentation = new Augmentation();
    this.children.push(this.augmentation);

    this.el.appendChild(this.augmentation.el);

    this.createDraggableTag(
      {
        id: 'handle',
        initialPosition: { x: e.clientX, y: e.clientY }
      },
      () => this.video.play(),
      () => {
        this.video.pause();
        if (this.onTagCrtd) this.onTagCrtd(this.path);
      }
    );
    this.video.el.removeEventListener('click', this.do);
  };
}

export default AugmentedVideoPlayer;
