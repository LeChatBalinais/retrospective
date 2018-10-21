import Draggableness from '../draggableness/draggableness';
import Animation from '../animation/animation';

class TagController {
  constructor(
    tag,
    marker,
    currentTime,
    playback,
    markersLayer,
    pressedCallback,
    draggedCallback,
    releasedCallback
  ) {
    this.tag = tag;
    this.currentTime = currentTime;
    this.playback = playback;
    this.markersLayer = markersLayer;
    this.marker = marker;

    this.marker.initialPosition = tag.position;

    this.pressedCallback = pressedCallback;
    this.draggedCallback = draggedCallback;
    this.releasedCallback = releasedCallback;

    if (playback) {
      this.addAnimation();
    } else {
      this.addDraggableness();
    }
  }

  setState(playback) {
    if (this.playback === playback) return;
    if (playback) {
      this.addAnimation();
    } else {
      this.addDraggableness();
    }
  }

  update(currentTime) {
    this.currentTime = currentTime;
    if (this.animation) {
      this.animation.update(this.currentTime);
    } else if (this.drag) {
      const { x } = this.drag.draggable;
      const { y } = this.drag.draggable;
      this.tag.addToPath({ time: this.currentTime, x, y });
    }
  }

  seekTo(time) {
    if (this.drag) {
      this.marker.position = this.tag.positionByTime(time);
    } else if (this.animation) {
      this.animation.update(time);
    }
  }

  addAnimation() {
    if (this.tag.dragged) return;
    if (this.drag) {
      this.drag.kill();
      this.drag = undefined;
    }

    this.animation = new Animation(
      this.marker,
      this.tag.start,
      this.tag.duration,
      this.tag.pathWithFixedStep
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

  onDraggableMarkerPressed = (x, y) => {
    this.tag.dragged = true;
    this.tag.addToPath({ time: this.currentTime, x, y });
    if (this.pressedCallback) this.pressedCallback();
  };

  onDraggableMarkerDragged = () => {
    if (this.draggedCallback) this.draggedCallback();
  };

  onDraggableMarkerReleased = (x, y) => {
    this.tag.dragged = false;
    this.tag.addToPath({ time: this.currentTime, x, y });
    if (this.releasedCallback) this.releasedCallback();
  };
}

export default TagController;
