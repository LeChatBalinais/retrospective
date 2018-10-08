class AugmentedVideo {
  constructor(videoSrc) {
    this.videoSrc = videoSrc;
    this.tags = [];
  }

  addTag(tag) {
    this.tags.push(tag);
  }
}

export default AugmentedVideo;
