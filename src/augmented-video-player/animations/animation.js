import TweenMax from 'gsap';

class Animation {
  constructor(target, start, duration, path, currentTime) {
    this.start = start;
    this.duration = duration;
    this.target = target.el;

    this.tween = TweenMax.to(this.target, this.duration, {
      bezier: {
        values: path,
        curviness: 0
      },
      paused: true
    });

    if (currentTime !== undefined) {
      this.tween.seek(currentTime - this.start);
    }
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

  kill() {
    this.tween.kill();
    this.tween = undefined;
  }
}

export default Animation;
