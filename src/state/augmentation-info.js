class Tags {
  constructor() {
    this.tags = [];
  }

  addTag(tag) {
    this.tags = [...this.tags, tag];
    if (this.onTagAdded) this.onTagAdded(tag);
  }
}

export default Tags;
