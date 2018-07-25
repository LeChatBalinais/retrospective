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

  get visible() {
    if (this.el.style.display === 'block') return true;
    return false;
  }

  set initialPosition(coordinates) {
    this.el.setAttributeNS(null, 'cx', coordinates.x);
    this.el.setAttributeNS(null, 'cy', coordinates.y);
  }

  set position(coordinates) {
    if (!coordinates) this.visible = false;
    else {
      this.visible = true;
      this.el.setAttributeNS(
        null,
        'transform',
        `matrix(1,0,0,1,${coordinates.x},${coordinates.y})`
      );
    }
  }

  set visible(visible) {
    if (visible) this.el.style.display = 'block';
    else this.el.style.display = 'none';
  }
}

export default Marker;
