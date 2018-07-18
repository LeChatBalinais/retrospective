import Draggableness from '../draggableness/draggableness';
import Animation from '../animation/animation';

class TagController {
  constructor(
    tag,
    marker,
    video,
    markersLayer,
    pressedCallback,
    draggedCallback,
    releasedCallback
  ) {
    this.tag = tag;
    this.video = video;
    this.markersLayer = markersLayer;
    this.marker = marker;
    [this.marker.position] = tag.pathWithFixedStep;
    this.pressedCallback = pressedCallback;
    this.draggedCallback = draggedCallback;
    this.releasedCallback = releasedCallback;

    this.setState(!this.video.paused);
  }

  setState(playback) {
    if (playback) {
      this.addAnimation();
    } else {
      this.addDraggableness();
    }
  }

  update() {
    if (this.animation) this.animation.update(this.video.currentTime);
  }

  addAnimation() {
    if (this.tag.dragged) return;
    if (this.drag) {
      this.drag.kill();
      this.drag = undefined;
    }
    this.animation = new Animation(
      this.marker,
      0,
      20,
      [{ x: 0, y: 0 }, { x: 100, y: 100 }],
      this.video.currentTime
    );
  }

  addDraggableness() {
    if (this.animation) {
      this.animation.kill();
      this.animation = undefined;
    }
    this.drag = new Draggableness(
      this.marker,
      this.markersLayer.el,
      this.onDraggableMarkerPressed,
      this.onDraggableMarkerDragged,
      this.onDraggableMarkerReleased
    );
  }

  onDraggableMarkerPressed = () => {
    this.tag.dragged = true;
    if (this.pressedCallback) this.pressedCallback();
  };
  onDraggableMarkerDragged = () => {
    if (this.draggedCallback) this.draggedCallback();
  };
  onDraggableMarkerReleased = () => {
    this.tag.dragged = false;
    if (this.releasedCallback) this.releasedCallback();
  };
}

export default TagController;
