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

    this.video = new Video();
    this.children.push(this.video);
    this.augmentation = new Augmentation();
    this.children.push(this.augmentation);

    this.initEl();

    this.el.onclick = this.do;
  }
}

export default AugmentedVideoPlayer;
