import SvgComponent from './svg-component';
import Tag from './tags/tag';

class Augmentation extends SvgComponent {
  constructor() {
    super();

    this.tag = 'svg';
    this.attributes = { class: 'augmentation' };

    this.el = this.createEl();
  }

  set tagInfos(tagInfos) {
    this.tags = tagInfos.map(tagInfo => this.createTag(tagInfo));
  }

  createTag(tagInfo) {
    const tag = new Tag(tagInfo);
    this.connectChild(tag);
    return tag;
  }
}

export default Augmentation;
