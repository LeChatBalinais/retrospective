import SvgComponent from './svg-component';
import Tag from './tag';

class Augmentation extends SvgComponent {
  constructor() {
    super();

    this.tag = 'svg';
    this.attributes = { class: 'augmentation' };

    this.el = this.createEl();
  }

  set tags(tags) {
    this.tags = tags.map(tagInfo => this.addTag(tagInfo));
  }

  AddTag(tagInfo) {
    const tag = new Tag(tagInfo.id, tagInfo.initialPosition);

    this.el.appendChild(tag.el);
    return tag;
  }
}

export default Augmentation;
