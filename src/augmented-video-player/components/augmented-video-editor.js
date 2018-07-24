import { TweenLite } from 'gsap';
import Component from './component';
import Video from './video';
import Augmentation from './augmentation';
import TagsController from '../../controllers/tags-controller';
import Tags from '../../state/augmentation-info';
import Tag from '../../state/tag';
import SeekBar from './controls/seek-bar';

class AugmentedVideoPlayer extends Component {
  constructor() {
    super();
    this.addChildComponent((this.video = new Video()));
    this.addChildComponent((this.markersLayer = new Augmentation()));
    this.addChildComponent((this.seekBar = new SeekBar(this.seekTo)));

    this.tags = new Tags();
    this.tagsController = new TagsController(
      this.tags,
      this.video,
      this.markersLayer,
      this
    );
    this.tagsController.onMarkerAdded = this.addMarkerToAugmentation;
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
    setTimeout(() => {
      this.seekBar.duration = this.video.duration;
    }, 1000);
  }

  addTag() {
    this.addChildComponent((this.additionLayer = new Augmentation()));
    this.additionLayer.el.classList.add('addition-layer');
    this.additionLayer.el.onclick = e => this.endTagAddition(e);
  }

  endTagAddition(e) {
    const x = e.clientX - this.additionLayer.el.getBoundingClientRect().x;
    const y = e.clientY - this.additionLayer.el.getBoundingClientRect().y;

    this.tags.addTag(new Tag('ds', { x, y }));

    this.removeChildComponent(this.additionLayer);
    this.additionLayer = undefined;
  }

  addMarkerToAugmentation = marker => {
    this.markersLayer.addChildComponent(marker);
  };

  play() {
    this.tagsController.setState(true);
    TweenLite.ticker.addEventListener('tick', this.update);
    this.video.play();
  }

  pause() {
    this.tagsController.setState(false);
    this.video.pause();
    TweenLite.ticker.removeEventListener('tick', this.update);
  }

  seekTo = time => {
    this.video.el.currentTime = time;
    this.tagsController.seekTo(time);
  };

  update = () => {
    this.tagsController.update();
    this.seekBar.update(this.video.currentTime);
  };
}

export default AugmentedVideoPlayer;
