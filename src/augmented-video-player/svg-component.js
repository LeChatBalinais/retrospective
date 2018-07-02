class SvgComponent {
  createEl() {
    if (!this.tag || !this.attributes) return undefined;

    const el = document.createElementNS('http://www.w3.org/2000/svg', this.tag);

    Object.keys(this.attributes).forEach(key => {
      if (
        this.attributes &&
        Object.prototype.hasOwnProperty.call(this.attributes, key)
      )
        el.setAttributeNS(null, key, this.attributes[key]);
    });

    return el;
  }
}

export default SvgComponent;