import TweenMax from 'gsap';
import Tag from './tag';

class AnimatedTag extends Tag {
  constructor(tagInfo) {
    super(tagInfo);

    this.duration = tagInfo.duration;
    this.path = tagInfo.path;
    this.el.style.display = 'block';
  }

  onParentConnected(parent) {
    Tag.prototype.onParentConnected.call(this, parent);
    this.tween = TweenMax.to(this.el, this.duration, {
      bezier: {
        values: this.path,
        curviness: 0
      },
      paused: true
    });
  }

  update(currentTime) {
    if (
      currentTime >= this.start &&
      currentTime <= this.start + this.duration
    ) {
      if (this.el.style.display === 'none') {
        this.el.style.display = 'block';
      }
      this.tween.progress((currentTime - this.start) / this.duration);
    } else if (this.el.style.display === 'block') {
      this.el.style.display = 'none';
    }
  }
}

export default AnimatedTag;
