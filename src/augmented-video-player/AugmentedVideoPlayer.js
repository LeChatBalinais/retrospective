import { TweenLite, TweenMax } from 'gsap';

class AugmentedVideoPlayer {
  constructor() {
    this.augmentedVideo = {};
    this.tags = [];

    this.player = document.createElement('div');
    this.player.setAttribute('class', 'augmented-video');

    this.videoContainer = document.createElement('div');
    this.videoContainer.setAttribute('class', 'video-container');

    this.augmentationContainer = document.createElement('div');
    this.augmentationContainer.setAttribute('class', 'augmentation-container');

    this.mainVideo = document.createElement('video');
    this.mainVideo.setAttribute('class', 'main-video');
    this.mainVideo.setAttribute('autoplay', 'true');

    this.augmentation = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    this.augmentation.setAttribute('class', 'augmentation');

    this.player.appendChild(this.videoContainer);
    this.player.appendChild(this.augmentationContainer);

    this.videoContainer.appendChild(this.mainVideo);

    this.augmentationContainer.appendChild(this.augmentation);
  }

  set source(augmentedVideo) {
    this.augmentedVideo = augmentedVideo;
    this.mainVideo.src = this.augmentedVideo.videoSrc;

    this.tags = this.augmentedVideo.tags.map(tagInfo =>
      this.createTag(tagInfo)
    );
  }

  static createTagElement(tagInfo) {
    const element = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );

    element.setAttribute('class', `tag-${tagInfo.id}`);
    element.setAttributeNS(null, 'cx', tagInfo.initialPosition.x);
    element.setAttributeNS(null, 'cy', tagInfo.initialPosition.y);
    element.setAttributeNS(null, 'r', 10);
    element.setAttributeNS(null, 'fill', 'red');
    return element;
  }

  static createTagTween(tagInfo, element) {
    return TweenMax.to(element, tagInfo.duration, {
      bezier: {
        values: tagInfo.path,
        curviness: 0
      },
      paused: true
    });
  }

  createTag(tagInfo) {
    const element = AugmentedVideoPlayer.createTagElement(tagInfo);

    element.style.display = 'block';
    this.augmentation.appendChild(element);

    const tween = AugmentedVideoPlayer.createTagTween(tagInfo, element);

    return { ...tagInfo, element, tween };
  }

  play() {
    this.mainVideo.play();
    TweenLite.ticker.addEventListener('tick', this.update);
  }

  pause() {
    this.mainVideo.pause();
    TweenLite.ticker.removeEventListener('tick', this.update);
  }

  update = () => {
    const { currentTime } = this.mainVideo;
    this.tags.forEach(tag => {
      if (currentTime >= tag.start && currentTime <= tag.start + tag.duration) {
        if (tag.element.style.display === 'none') {
          const { element } = tag;
          element.style.display = 'block';
        }
        tag.tween.progress((currentTime - tag.start) / tag.duration);
      } else if (tag.element.style.display === 'block') {
        const { element } = tag;
        element.style.display = 'none';
      }
    });
  };
}

export default AugmentedVideoPlayer;
