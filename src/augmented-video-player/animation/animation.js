import TweenMax from 'gsap';

class Animation {
  constructor(target, start, duration, path) {
    this.start = start;
    this.duration = duration;
    this.target = target;

    console.log(duration, path);

    this.tween = TweenMax.to(this.target.el, this.duration, {
      startAt: { x: 0, y: 0 },
      bezier: {
        values: path,
        timeResolution: 0
      },
      paused: true
    });
  }

  update(currentTime) {
    if (
      currentTime >= this.start &&
      currentTime <= this.start + this.duration
    ) {
      if (!this.target.visible) this.target.visible = true;

      if (Math.abs(currentTime - this.tween.time()) > 0.001);
      this.tween.resume(currentTime);
      return;
    }

    if (this.target.visible) this.target.visible = false;
  }

  kill() {
    this.tween.kill();
    this.tween = undefined;
  }
}

export default Animation;
