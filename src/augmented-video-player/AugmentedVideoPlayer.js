import { TweenLite, TweenMax } from 'gsap';
import Video from './video';
import Augmentation from './augmentation';

class AugmentedVideoPlayer {
  constructor() {
    this.augmentedVideo = {};
    this.tags = [];

    this.player = document.createElement('div');
    this.player.setAttribute('class', 'augmented-video');

    this.video = new Video();

    this.augmentation = new Augmentation();

    this.player.appendChild(this.video.el);
    this.player.appendChild(this.augmentation.el);
  }

  set source(augmentedVideo) {
    this.augmentedVideo = augmentedVideo;
    this.video.src = this.augmentedVideo.videoSrc;

    this.tags = this.augmentedVideo.tags.map(tagInfo =>
      this.createTag(tagInfo)
    );
  }

  static createTagElement(tagInfo) {
    const element = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );

    element.setAttributeNS(null, 'class', `tag-${tagInfo.id}`);
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
    this.augmentation.el.appendChild(element);

    const tween = AugmentedVideoPlayer.createTagTween(tagInfo, element);

    return { ...tagInfo, element, tween };
  }

  play() {
    this.video.play();
    TweenLite.ticker.addEventListener('tick', this.update);
  }

  pause() {
    this.video.pause();
    TweenLite.ticker.removeEventListener('tick', this.update);
  }

  update = () => {
    const { currentTime } = this.video;
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
