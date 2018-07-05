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

    this.augmentedVideo = {};

    this.video = new Video();
    this.children.push(this.video);

    this.el = this.createEl();

    this.video.el.onclick = this.do;
  }

  set source(augmentedVideo) {
    this.augmentedVideo = augmentedVideo;

    this.video.el.addEventListener('durationchange', () => {
      console.log(this.video.duraiton);
      this.seekBar = new SeekBar(this.video.duraiton, time => {
        this.video.currentTime = time;
      });
      this.children.push(this.seekBar);

      this.connectChild(this.seekBar);
    });

    this.video.src = this.augmentedVideo.videoSrc;
  }

  set onTagCreated(onTagCreated) {
    this.onTagCrtd = onTagCreated;
  }

  do = e => {
    this.augmentation = new Augmentation();
    this.children.push(this.augmentation);

    this.el.appendChild(this.augmentation.el);

    this.augmentation.createDraggableTag(
      {
        id: 'handle',
        initialPosition: { x: e.clientX, y: e.clientY }
      },
      (x, y) => {
        this.video.play();
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
        this.path.push({
          time: this.video.currentTime,
          x,
          y
        });
        if (this.onTagCrtd) this.onTagCrtd(this.path);
      },
      (x, y) => {
        this.path.push({
          time: this.video.currentTime,
          x,
          y
        });
      }
    );
    this.video.el.removeEventListener('click', this.do);
  };
}

export default AugmentedVideoPlayer;
