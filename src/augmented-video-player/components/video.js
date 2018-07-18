import Component from './component';

class Video extends Component {
  // eslint-disable-next-line class-methods-use-this
  get tag() {
    return 'video';
  }

  // eslint-disable-next-line class-methods-use-this
  get attributes() {
    return { class: 'main-video' };
  }

  get currentTime() {
    return this.el.currentTime;
  }

  get duration() {
    return this.el.duration;
  }

  get paused() {
    return this.el.paused;
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
