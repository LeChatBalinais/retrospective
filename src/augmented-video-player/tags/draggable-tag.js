import Draggable from 'gsap/Draggable';
import Tag from './tag';

class DraggableTag extends Tag {
  constructor(tagInfo, pressCallback, releaseCallback, dragCallback) {
    super(tagInfo);

    this.pressCallback = pressCallback;
    this.releaseCallback = releaseCallback;
    this.dragCallback = dragCallback;
  }

  onParentConnected(parent) {
    super.onParentConnected(parent);
    Draggable.create(this.el, {
      bounds: parent.el,
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
        this.el.getBoundingClientRect().left,
        this.el.getBoundingClientRect().top
      );
  };

  onRelease = () => {
    if (this.releaseCallback)
      this.releaseCallback(
        this.el.getBoundingClientRect().left,
        this.el.getBoundingClientRect().top
      );
  };

  onDrag = () => {
    if (this.dragCallback)
      this.dragCallback(
        this.el.getBoundingClientRect().left,
        this.el.getBoundingClientRect().top
      );
  };
}

export default DraggableTag;
