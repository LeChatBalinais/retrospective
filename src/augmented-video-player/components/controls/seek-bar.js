import Component from '../component';

class SeekBar extends Component {
  constructor(onSeek) {
    super();
    this.onSeek = onSeek;
  }

  // eslint-disable-next-line class-methods-use-this
  get tag() {
    return 'input';
  }

  // eslint-disable-next-line class-methods-use-this
  get attributes() {
    return {
      type: 'range',
      min: 0,
      value: '0',
      class: 'seek-bar'
    };
  }

  get eventHandlers() {
    this.onInput = () => {
      this.onSeek(this.el.value);
    };
    return { oninput: this.onInput };
  }

  set duration(duration) {
    this.el.max = duration;
  }

  update(currentTime) {
    this.el.value = currentTime;
  }
}

export default SeekBar;
