import { Draggable } from 'gsap/Draggable';

class AugmentedVideoPlayer {
    constructor() {
        this.augmentedVideo = {};

        this.player = document.createElement('div');
        this.player.setAttribute('class', 'augmented-video');

        this.videoContainer = document.createElement('div');
        this.videoContainer.setAttribute('class', 'video-container');

        this.augmentationContainer = document.createElement('div');
        this.augmentationContainer.setAttribute('class', 'augmentation-container');

        this.mainVideo = document.createElement('video');
        this.mainVideo.setAttribute('class', 'main-video');
        this.mainVideo.setAttribute('autoplay', 'true');

        this.augmentation = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'svg'
        );
        this.augmentation.setAttribute('class', 'augmentation');

        this.player.appendChild(this.videoContainer);
        this.player.appendChild(this.augmentationContainer);

        this.videoContainer.appendChild(this.mainVideo);

        this.augmentationContainer.appendChild(this.augmentation);

        this.tagHandle = AugmentedVideoPlayer.createTagElement();

        this.augmentation.appendChild(this.tagHandle);

        Draggable.create(this.tagHandle, {
            bounds: "svg",
        });
    }

    set source(augmentedVideo) {
        this.augmentedVideo = augmentedVideo;
        this.mainVideo.src = this.augmentedVideo.videoSrc;
    }

    static createTagElement() {
        const element = document.createElementNS(
            'http://www.w3.org/2000/svg',
            'circle'
        );

        element.setAttribute('class', 'tag-handle');
        element.setAttributeNS(null, 'cx', 15);
        element.setAttributeNS(null, 'cy', 15);
        element.setAttributeNS(null, 'r', 10);
        element.setAttributeNS(null, 'fill', 'red');
        return element;
    }


    createTag() {
        const element = AugmentedVideoPlayer.createTagElement();

        element.style.display = 'block';
        this.augmentation.appendChild(element);

        return { element };
    }
}

export default AugmentedVideoPlayer;
