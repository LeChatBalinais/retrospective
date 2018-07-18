class Component {
  constructor() {
    this.children = [];
    this.parent = undefined;
    this.initEl();
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

    Object.keys(this.eventHandlers).forEach(key => {
      if (
        this.eventHandlers &&
        Object.prototype.hasOwnProperty.call(this.eventHandlers, key)
      )
        this.el[key] = this.attributes[key];
    });
  }

  addChildComponent(child) {
    this.children = [...this.children, child];
    this.el.appendChild(child.el);
    child.onAddedToParent(this);
  }

  removeChildComponent(child) {
    this.el.removeChild(child.el);
    this.children = this.children.splice(this.children.indexOf(child), 1);
    this.onRemovedFromParent();
  }

  onAddedToParent(parent) {
    this.parent = parent;
  }

  onRemovedFromParent() {
    this.parent = undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  get eventHandlers() {
    return {};
  }
}

export default Component;
