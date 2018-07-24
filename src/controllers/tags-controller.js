import Marker from '../augmented-video-player/components/markers/marker';
import TagController from './tag-controller';

class TagsController {
  constructor(tags, video, markersLayer, player) {
    this.tags = tags;
    this.video = video;
    this.markersLayer = markersLayer;
    this.tags.onTagAdded = this.createMarker;
    this.markers = [];
    this.tagControllers = [];
    this.player = player;
  }

  setState(playback) {
    this.tagControllers.forEach(tagController =>
      tagController.setState(playback)
    );
  }
  update() {
    this.tagControllers.forEach(tagController => tagController.update());
  }

  seekTo(time) {
    this.tagControllers.forEach(tagController => tagController.seekTo(time));
  }

  createMarker = tag => {
    const marker = new Marker();
    if (this.onMarkerAdded) this.onMarkerAdded(marker);

    this.tagControllers = [
      ...this.tagControllers,
      new TagController(
        tag,
        marker,
        this.video,
        this.markersLayer,
        this.onTagPressed,
        this.onTagDragged,
        this.onTagReleased
      )
    ];
  };

  onTagPressed = () => {
    this.player.play();
  };

  onTagDragged = () => {};

  onTagReleased = () => {
    this.player.pause();
  };
}

export default TagsController;
