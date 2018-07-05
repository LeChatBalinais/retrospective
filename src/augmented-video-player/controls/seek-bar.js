import Component from '../component';

class SeekBar extends Component {
  constructor(duration, onSeek) {
    super();

    this.tag = 'input';
    this.duration = duration;

    this.attributes = {
      type: 'range',
      min: 0,
      max: 100,
      value: '1',
      class: 'seek-bar'
    };

    this.el = this.createEl();
    this.el.oninput = function ons() {
      console.log(duration);
      console.log(this.value);
      onSeek((this.value * duration) / 100);
    };
  }
}

export default SeekBar;
