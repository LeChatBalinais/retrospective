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
      const tag = Augmentation.createTag(tagInfo);
      this.el.appendChild(tag.el);
      return tag;
    });
  }

  createDraggableTag(tagInfo, pushCallback, releaseCallback) {
    this.dragTag = new DraggableTag(tagInfo, pushCallback, releaseCallback);
    this.el.appendChild(this.dragTag.el);
  }

  update = currentTime => {
    this.tags.forEach(tag => tag.update(currentTime));
  };

  static createTag(tagInfo) {
    return new AnimatedTag(tagInfo);
  }
}

export default Augmentation;
