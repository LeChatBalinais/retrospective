class Tag {
  constructor(ID, path) {
    this.ID = ID;
    this.path = path;
  }

  get pathWithFixedStep() {
    return this.path;
  }
}

export default Tag;
