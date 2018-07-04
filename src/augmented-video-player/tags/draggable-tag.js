import Draggable from 'gsap/Draggable';
import Tag from './tag';

class DraggableTag extends Tag {
  constructor(tagInfo, pressCallback, releaseCallback) {
    super(tagInfo);

    this.pressCallback = pressCallback;
    this.releaseCallback = releaseCallback;

    Draggable.create(this.el, {
      bounds: '.augmentation',
      onPress: this.onPress,
      onRelease: this.onRelease,
      onDrag: this.onDrag,
      onClick: e => {
        e.stopPropagation();
      }
    });
  }

  onPress = () => {
    this.path = [
      {
        time: this.video.currentTime,
        x: this.tagHandle.getBoundingClientRect().left,
        y: this.tagHandle.getBoundingClientRect().top
      }
    ];
    if (this.pressCallback) this.pressCallback();
  };

  onRelease = () => {
    this.path.push({
      time: this.video.currentTime,
      x: this.tagHandle.getBoundingClientRect().left,
      y: this.tagHandle.getBoundingClientRect().top
    });
    if (this.releaseCallback) this.releaseCallback();
  };

  onDrag = () => {
    this.path.push({
      time: this.video.currentTime,
      x: this.tagHandle.getBoundingClientRect().left,
      y: this.tagHandle.getBoundingClientRect().top
    });
  };
}

export default DraggableTag;
