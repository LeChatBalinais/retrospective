import { TweenLite } from 'gsap';
import Component from './component';
import Video from './video';
import Augmentation from './augmentation';
import SeekBar from './controls/seek-bar';

class AugmentedVideoPlayer extends Component {
  constructor() {
    super();

    this.tag = 'div';
    this.attributes = {
      class: 'augmented-video'
    };

    this.video = new Video();
    this.children.push(this.video);
    this.augmentation = new Augmentation();
    this.children.push(this.augmentation);

    this.el = this.createEl();

    this.augmentation.el.onclick = this.do;
  }

  set source(augmentedVideo) {
    this.video.el.addEventListener('durationchange', () => {
      this.seekBar = new SeekBar(this.video.duration, time => {
        this.video.currentTime = time;
      });
      this.children.push(this.seekBar);

      this.connectChild(this.seekBar);
    });

    this.video.src = augmentedVideo.videoSrc;
    this.augmentation.tagInfos = augmentedVideo.tags;
  }

  do = e => {
    this.augmentation.el.onclick = undefined;
    this.augmentation.createDraggableTag(
      {
        id: 'handle',
        initialPosition: { x: e.clientX, y: e.clientY }
      },
      (x, y) => {
        this.video.play();
        TweenLite.ticker.addEventListener('tick', this.update);
        this.path = [
          {
            time: this.video.currentTime,
            x,
            y
          }
        ];
      },
      (x, y) => {
        this.video.pause();
        TweenLite.ticker.removeEventListener('tick', this.update);
        this.path.push({
          time: this.video.currentTime,
          x,
          y
        });
        const tI = [
          {
            id: '534526',
            start: this.path[0].time,
            duration: this.path[this.path.length - 1].time - this.path[0].time,
            initialPosition: { x: this.path[0].x, y: this.path[0].y },
            path: this.path
          }
        ];
        this.augmentation.tagInfos = tI;
      },
      (x, y) => {
        this.path.push({
          time: this.video.currentTime,
          x,
          y
        });
      }
    );
  };

  play() {
    this.video.play();
    TweenLite.ticker.addEventListener('tick', this.update);
  }

  pause() {
    this.video.pause();
    TweenLite.ticker.removeEventListener('tick', this.update);
  }

  update = () => {
    this.augmentation.update(this.video.currentTime);
    this.seekBar.update(this.video.currentTime);
  };
}

export default AugmentedVideoPlayer;
