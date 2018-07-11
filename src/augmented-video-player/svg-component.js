import Component from './component';

class SvgComponent extends Component {
  initEl() {
    if (!this.tag || !this.attributes) return;

    this.el = document.createElementNS('http://www.w3.org/2000/svg', this.tag);

    Object.keys(this.attributes).forEach(key => {
      if (
        this.attributes &&
        Object.prototype.hasOwnProperty.call(this.attributes, key)
      )
        this.el.setAttributeNS(null, key, this.attributes[key]);
    });

    this.children.forEach(child => this.el.appendChild(child.el));
  }
}

export default SvgComponent;
