class Component {
  constructor() {
    this.augmentedVideo = undefined;
    this.tags = [];
    this.children = [];
    this.parent = undefined;
  }
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

    this.children.forEach(child => el.appendChild(child.el));

    return el;
  }

  connectChild(child) {
    this.el.appendChild(child.el);
    child.onParentConnected(this);
  }

  onParentConnected(parent) {
    this.parent = parent;
  }
}

export default Component;
