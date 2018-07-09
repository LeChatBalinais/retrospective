import Draggable from 'gsap/Draggable';
import TweenMax from 'gsap';
import Tag from './tag';

class UniversalTag extends Tag {
  onParentConnected(parent) {
    super.onParentConnected(parent);
    this.draggable = Draggable.create(this.el, {
      bounds: parent.el,
      onClick: e => {
        e.stopPropagation();
      }
    });
  }

  makeDraggable() {
    this.tween.kill();
    this.tween = undefined;
    this.draggable = Draggable.create(this.el, {
      bounds: this.parent.el,
      onClick: e => {
        e.stopPropagation();
      }
    });
  }

  makeAnimated(path, duration, start, currentTime) {
    this.start = start;
    this.duration = duration;
    Draggable.get(this.el).kill();
    this.draggable = undefined;
    this.tween = TweenMax.to(this.el, duration, {
      bezier: {
        values: path,
        curviness: 0
      },
      paused: true
    });
    this.tween.seek(currentTime);
  }

  update(currentTime) {
    if (this.tween === undefined) return;

    if (
      currentTime >= this.start &&
      currentTime <= this.start + this.duration
    ) {
      if (this.el.style.display === 'none') {
        this.el.style.display = 'block';
      }
      this.tween.progress((currentTime - this.start) / this.duration);
      console.log('dsd');
    } else if (this.el.style.display === 'block') {
      this.el.style.display = 'none';
    }
  }
}

export default UniversalTag;
