class Component {
  createEl() {
    if (!this.tag || !this.attributes) return undefined;

    const el = document.createElement(this.tag);

    Object.keys(this.attributes).forEach(key => {
      if (
        this.attributes &&
        Object.prototype.hasOwnProperty.call(this.attributes, key)
      )
        el.setAttribute(key, this.attributes[key]);
    });

    return el;
  }
}

export default Component;
