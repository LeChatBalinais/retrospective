import SvgComponent from './svg-component';

class Tag extends SvgComponent {
  constructor(id, initialPosition) {
    super();

    this.id = id;
    this.tag = 'circle';
    this.attributes = {
      class: `tag-${this.id}`,
      cx: initialPosition.x,
      cy: initialPosition.y,
      r: 10,
      fill: 'red'
    };

    this.el = this.createEl();
  }
}

export default Tag;
