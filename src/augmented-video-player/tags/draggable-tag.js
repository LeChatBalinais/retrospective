import Draggable from 'gsap/Draggable';
import Tag from './tag';

class DraggableTag extends Tag {
  constructor(tagInfo) {
    super(tagInfo);

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
    this.video.play();
    this.path = [
      {
        time: this.video.currentTime,
        x: this.tagHandle.getBoundingClientRect().left,
        y: this.tagHandle.getBoundingClientRect().top
      }
    ];
  };

  onRelease = () => {
    this.video.pause();
    if (this.onTagCrtd) this.onTagCrtd(this.path);
    this.path = [];
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
