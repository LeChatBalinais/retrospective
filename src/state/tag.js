class Tag {
  constructor(ID, position) {
    this.ID = ID;
    this.position = position;
    this.path = [];
  }

  get start() {
    if (this.path.length) return this.path[0].time;
    return undefined;
  }

  get duration() {
    if (this.path.length)
      return this.path[this.path.length - 1].time - this.path[0].time;
    return 0;
  }

  get pathWithFixedStep() {
    return this.path;
  }

  addToPath({ time, x, y }) {
    if (this.path.length !== 0 && time === this.path[this.path.length - 1].time)
      return;
    this.path = [...this.path, { time, x, y }];
  }

  positionByTime(time) {
    if (time < this.path[0].time || time > this.path[this.path.length - 1].time)
      return undefined;
    for (let i = 0; i < this.path.length; i += 1) {
      if (this.path[i].time === time)
        return {
          x: this.path[i].x,
          y: this.path[i].y
        };
      else if (this.path[i].time <= time && this.path[i + 1].time >= time) {
        return {
          x: (this.path[i].x + this.path[i + 1].x) / 2,
          y: (this.path[i].y + this.path[i + 1].y) / 2
        };
      }
    }
    return undefined;
  }
}

export default Tag;
