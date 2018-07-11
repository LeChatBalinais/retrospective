import Component from '../component';

class SeekBar extends Component {
  constructor(duration, onSeek) {
    super();

    this.tag = 'input';

    this.attributes = {
      type: 'range',
      min: 0,
      max: duration,
      value: '0',
      class: 'seek-bar'
    };

    this.initEl();
    this.el.oninput = function ons() {
      onSeek(this.value);
    };
  }

  update(currentTime) {
    this.el.value = currentTime;
  }
}

export default SeekBar;
