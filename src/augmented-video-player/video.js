import Component from './component';

class Video extends Component {
  constructor() {
    super();

    this.tag = 'video';
    this.attributes = { class: 'main-video', autoplay: 'true' };

    this.el = this.createEl();
  }

  get currentTime() {
    return this.el.currentTime;
  }

  set src(val) {
    this.el.src = val;
  }

  play() {
    this.el.play();
  }

  pause() {
    this.el.play();
  }
}

export default Video;
