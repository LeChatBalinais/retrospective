import SvgComponent from '../svg-component';

class Tag extends SvgComponent {
  constructor(tagInfo) {
    super();

    this.tag = 'circle';
    this.attributes = {
      class: `tag-${tagInfo.id}`,
      cx: tagInfo.initialPosition.x,
      cy: tagInfo.initialPosition.y,
      r: 10,
      fill: 'red'
    };

    this.id = tagInfo.id;
    this.start = tagInfo.start;
    this.duration = tagInfo.duration;

    this.el = this.createEl();
  }
}

export default Tag;
