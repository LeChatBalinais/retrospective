import Draggable from 'gsap/Draggable';

class Animation {
  constructor(target, pressCallback, dragCallback, releaseCallback) {
    this.target = target.el;
    this.pressCallback = pressCallback;
    this.dragCallback = dragCallback;
    this.releaseCallback = releaseCallback;
    this.target = target.el;
    this.draggable = Draggable.create(this.el, {
      bounds: this.target,
      onPress: this.onPress,
      onRelease: this.onRelease,
      onDrag: this.onDrag,
      onClick: e => {
        e.stopPropagation();
      }
    });
  }

  onPress = () => {
    if (this.pressCallback)
      this.pressCallback(
        this.target.getBoundingClientRect().left,
        this.target.getBoundingClientRect().top
      );
  };

  onRelease = () => {
    if (this.releaseCallback)
      this.releaseCallback(
        this.target.getBoundingClientRect().left,
        this.target.getBoundingClientRect().top
      );
  };

  onDrag = () => {
    if (this.dragCallback)
      this.dragCallback(
        this.target.getBoundingClientRect().left,
        this.target.getBoundingClientRect().top
      );
  };

  kill() {
    this.draggable.kill();
    this.draggable = undefined;
  }
}

export default Animation;
