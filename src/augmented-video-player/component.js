class Component {
  constructor() {
    this.augmentedVideo = undefined;
    this.tags = [];
    this.children = [];
    this.parent = undefined;
  }
  initEl() {
    if (!this.tag || !this.attributes) return;

    this.el = document.createElement(this.tag);

    Object.keys(this.attributes).forEach(key => {
      if (
        this.attributes &&
        Object.prototype.hasOwnProperty.call(this.attributes, key)
      )
        this.el.setAttribute(key, this.attributes[key]);
    });

    this.children.forEach(child => this.el.appendChild(child.el));
  }

  addChildComponent(component) {
    this.children.push(component);
  }

  connectChild(child) {
    this.children.push(child);
    this.el.appendChild(child.el);
    child.onParentConnected(this);
  }

  connectComponentEl(component) {
    this.el.appendChild(component.el);
    component.onParentConnected(this);
  }

  onParentConnected(parent) {
    this.parent = parent;
  }
}

export default Component;
