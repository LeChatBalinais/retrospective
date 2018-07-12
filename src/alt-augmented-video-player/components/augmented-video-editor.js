import Component from './component';
import Video from './video';
import Augmentation from './augmentation';

class AugmentedVideoPlayer extends Component {
  constructor() {
    super();
    this.addChildComponent((this.video = new Video()));
    this.addChildComponent((this.markersLayer = new Augmentation()));
  }

  // eslint-disable-next-line class-methods-use-this
  get tag() {
    return 'div';
  }

  // eslint-disable-next-line class-methods-use-this
  get attributes() {
    return { class: 'augmented-video' };
  }

  set videoSource(videoSource) {
    this.video.src = videoSource;
  }

  startTagAddition() {
    this.addChildComponent((this.additionLayer = new Augmentation()));
    this.additionLayer.el.classList.add('addition-layer');
    this.additionLayer.el.onclick = e => this.endTagAddition(e);
  }

  endTagAddition(e) {
    console.log(e);
    this.removeChildComponent(this.additionLayer);
    this.additionLayer = undefined;
  }

  play() {
    this.video.play();
  }

  pause() {
    this.video.pause();
  }
}

export default AugmentedVideoPlayer;
