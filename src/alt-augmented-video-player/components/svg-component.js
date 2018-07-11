import Component from './component';

class SvgComponent extends Component {
  initEl() {
    if (!this.tag || !this.attributes || !this.eventHandlers) return;

    this.el = document.createElementNS('http://www.w3.org/2000/svg', this.tag);

    Object.keys(this.attributes).forEach(key => {
      if (
        this.attributes &&
        Object.prototype.hasOwnProperty.call(this.attributes, key)
      )
        this.el.setAttributeNS(key, this.attributes[key]);
    });

    Object.keys(this.eventHandlers).forEach(key => {
      if (
        this.eventHandlers &&
        Object.prototype.hasOwnProperty.call(this.eventHandlers, key)
      )
        this.el[key] = this.attributes[key];
    });

    this.children.forEach(child => this.connectComponentEl(child));
  }
}

export default SvgComponent;
