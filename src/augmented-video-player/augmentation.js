import SvgComponent from './svg-component';
import AnimatedTag from './tags/animated-tag';
import DraggableTag from './tags/draggable-tag';

class Augmentation extends SvgComponent {
  constructor() {
    super();

    this.tag = 'svg';
    this.attributes = { class: 'augmentation' };

    this.el = this.createEl();
  }

  set tagInfos(tagInfos) {
    this.tags = tagInfos.map(tagInfo => {
      const tag = new AnimatedTag(tagInfo);
      this.connectChild(tag);
      return tag;
    });
  }

  createDraggableTag(tagInfo, pressCallback, releaseCallback, dragCallback) {
    this.dragTag = new DraggableTag(
      tagInfo,
      pressCallback,
      releaseCallback,
      dragCallback
    );
    this.connectChild(this.dragTag);
  }

  update = currentTime => {
    this.tags.forEach(tag => tag.update(currentTime));
  };

  static createTag(tagInfo) {
    return new AnimatedTag(tagInfo);
  }
}

export default Augmentation;
