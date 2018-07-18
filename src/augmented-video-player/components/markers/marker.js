import SvgComponent from '../svg-component';

class Marker extends SvgComponent {
  // eslint-disable-next-line class-methods-use-this
  get tag() {
    return 'circle';
  }

  // eslint-disable-next-line class-methods-use-this
  get attributes() {
    return {
      class: 'marker',
      r: 10,
      fill: 'red'
    };
  }

  set position(coordinates) {
    this.el.setAttributeNS(null, 'cx', coordinates.x);
    this.el.setAttributeNS(null, 'cy', coordinates.y);
  }

  set visible(visible) {
    if (visible) this.el.style.display = 'block';
    else this.el.style.display = 'none';
  }
}

export default Marker;
