import SvgComponent from './svg-component';

class Svg extends SvgComponent {
  constructor() {
    super();

    this.tag = 'svg';
    this.attributes = { class: 'augmentation' };

    this.el = this.createEl();
  }
}

export default Svg;
