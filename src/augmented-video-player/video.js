import Component from './component';

class Video extends Component {
  constructor() {
    super();

    this.tag = 'video';
    this.attributes = { class: 'main-video' };

    this.el = this.createEl();
  }

  get currentTime() {
    return this.el.currentTime;
  }

  get duration() {
    return this.el.duration;
  }

  set currentTime(time) {
    this.el.currentTime = time;
  }

  set src(val) {
    this.el.src = val;
  }

  play() {
    this.el.play();
  }

  pause() {
    this.el.pause();
  }
}

export default Video;
