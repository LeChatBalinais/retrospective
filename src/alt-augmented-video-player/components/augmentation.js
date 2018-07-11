import SvgComponent from './svg-component';

class Augmentation extends SvgComponent {
  // eslint-disable-next-line class-methods-use-this
  get tag() {
    return 'svg';
  }

  // eslint-disable-next-line class-methods-use-this
  get attributes() {
    return { class: 'augmentation' };
  }
  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
}

export default Augmentation;
