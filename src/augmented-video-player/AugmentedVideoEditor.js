import { Draggable } from 'gsap/Draggable';

class AugmentedVideoPlayer {
  constructor() {
    this.augmentedVideo = {};

    this.player = document.createElement('div');
    this.player.setAttribute('class', 'augmented-video');

    this.videoContainer = document.createElement('div');
    this.videoContainer.setAttribute('class', 'video-container');

    this.augmentationContainer = document.createElement('div');
    this.augmentationContainer.setAttribute('class', 'augmentation-container');

    this.mainVideo = document.createElement('video');
    this.mainVideo.setAttribute('class', 'main-video');

    this.augmentation = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    this.augmentation.setAttribute('class', 'augmentation');

    this.player.appendChild(this.videoContainer);
    this.player.appendChild(this.augmentationContainer);

    this.videoContainer.appendChild(this.mainVideo);

    this.augmentationContainer.appendChild(this.augmentation);

    this.augmentationContainer.onClick = () => {};

    this.augmentation.onclick = this.do;
  }

  do = e => {
    this.augmentationContainer.removeChild(this.augmentation);
    this.augmentation = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    this.augmentation.setAttribute('class', 'augmentation');

    this.augmentationContainer.appendChild(this.augmentation);

    console.log('helloWorld');
    this.tagHandle = AugmentedVideoPlayer.createTagElement({
      x: e.clientX,
      y: e.clientY
    });

    this.augmentation.appendChild(this.tagHandle);
    this.init();
    this.augmentation.removeEventListener('click', this.do);
  };

  init() {
    Draggable.create(this.tagHandle, {
      bounds: 'svg',
      onPress: this.onPress,
      onRelease: this.onRelease,
      onDrag: this.onDrag,
      onClick: e => {
        e.stopPropagation();
      }
    });
  }

  set source(augmentedVideo) {
    this.augmentedVideo = augmentedVideo;
    this.mainVideo.src = this.augmentedVideo.videoSrc;
  }

  set onTagCreated(onTagCreated) {
    this.onTagCrtd = onTagCreated;
  }

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

  createTag() {
    const element = AugmentedVideoPlayer.createTagElement();

    element.style.display = 'block';
    this.augmentation.appendChild(element);

    return { element };
  }

  onPress = () => {
    console.log('onPress');
    this.mainVideo.play();
    this.path = [
      {
        time: this.mainVideo.currentTime,
        x: this.tagHandle.getBoundingClientRect().left,
        y: this.tagHandle.getBoundingClientRect().top
      }
    ];
  };

  onRelease = () => {
    console.log('onRelease');
    this.mainVideo.pause();
    if (this.onTagCrtd) this.onTagCrtd(this.path);
    this.path = [];
  };

  onDrag = () => {
    console.log('onDrag');
    this.path.push({
      time: this.mainVideo.currentTime,
      x: this.tagHandle.getBoundingClientRect().left,
      y: this.tagHandle.getBoundingClientRect().top
    });
  };
}

export default AugmentedVideoPlayer;
