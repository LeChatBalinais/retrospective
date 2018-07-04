import { Draggable } from 'gsap/Draggable';
import Component from './component';
import Video from './video';

class AugmentedVideoPlayer extends Component {
  static createTagElement(position) {
    const element = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );

    element.setAttribute('class', 'tag-handle');
    element.setAttributeNS(null, 'cx', position.x);
    element.setAttributeNS(null, 'cy', position.y);
    element.setAttributeNS(null, 'r', 10);
    element.setAttributeNS(null, 'fill', 'red');
    return element;
  }

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

  onPress = () => {
    this.video.play();
    this.path = [
      {
        time: this.video.currentTime,
        x: this.tagHandle.getBoundingClientRect().left,
        y: this.tagHandle.getBoundingClientRect().top
      }
    ];
  };

  onRelease = () => {
    this.video.pause();

    this.path.push({
      time: this.video.currentTime,
      x: this.tagHandle.getBoundingClientRect().left,
      y: this.tagHandle.getBoundingClientRect().top
    });

    if (this.onTagCrtd) this.onTagCrtd(this.path);
    this.path = [];
  };

  onDrag = () => {
    this.path.push({
      time: this.video.currentTime,
      x: this.tagHandle.getBoundingClientRect().left,
      y: this.tagHandle.getBoundingClientRect().top
    });
  };

  set source(augmentedVideo) {
    this.augmentedVideo = augmentedVideo;
    this.video.src = this.augmentedVideo.videoSrc;
  }

  set onTagCreated(onTagCreated) {
    this.onTagCrtd = onTagCreated;
  }

  init() {
    Draggable.create(this.tagHandle, {
      bounds: '.augmentation',
      onPress: this.onPress,
      onRelease: this.onRelease,
      onDrag: this.onDrag,
      onClick: e => {
        e.stopPropagation();
      }
    });
  }

  do = e => {
    this.augmentation = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    this.augmentation.setAttribute('class', 'augmentation');

    this.el.appendChild(this.augmentation);

    this.tagHandle = AugmentedVideoPlayer.createTagElement({
      x: e.clientX,
      y: e.clientY
    });

    this.augmentation.appendChild(this.tagHandle);
    this.init();
    this.augmentation.removeEventListener('click', this.do);
  };

  createTag() {
    const element = AugmentedVideoPlayer.createTagElement();

    element.style.display = 'block';
    this.augmentation.appendChild(element);

    return { element };
  }
}

export default AugmentedVideoPlayer;
