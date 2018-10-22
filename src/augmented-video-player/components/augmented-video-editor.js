import Component from './component';
import Augmentation from './augmentation';
import TagsController from '../controllers/tags-controller';
import Tags from '../state/augmentation-info';
import Tag from '../state/tag';

class AugmentedVideoPlayer extends Component {
  constructor(onTagAdded) {
    super();
    this.addChildComponent((this.markersLayer = new Augmentation()));

    this.tags = new Tags();
    this.tagsController = new TagsController(
      this.tags,
      this.markersLayer,
      this
    );
    this.tagsController.onMarkerAdded = this.addMarkerToAugmentation;
    this.onTagAdded = onTagAdded;
  }

  // eslint-disable-next-line class-methods-use-this
  get tag() {
    return 'div';
  }

  // eslint-disable-next-line class-methods-use-this
  get attributes() {
    return { class: 'augmented-video' };
  }

  set playback(playback) {
    this.tagsController.setState(playback);
  }

  addMarkerToAugmentation = marker => {
    this.markersLayer.addChildComponent(marker);
  };

  seekTo = time => {
    this.tagsController.seekTo(time);
  };

  update = currentTime => {
    this.tagsController.update(currentTime);
  };

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
    this.onTagAdded();
  }
}

export default AugmentedVideoPlayer;
