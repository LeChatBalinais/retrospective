import React from 'react';
import ControlPanel from './ControlPanel';
import VideoContainer from '~/containers/video';
import NewTagLayerContainer from '~/containers/new-tag-layer';
import AugmentationContainer from '~/containers/augmentation';
import SeekBar from '~/containers/seekbar';
import TagPanelContainer from '~/containers/tag-panel';
import GraphicalAugmentation from '~/containers/graphical-augmentation';
import SeekPreview from '~/containers/seek-preview';

export interface ValueProps {
  placeNewTagMode: boolean;
  currentTag: string;
}


type Props = ValueProps;

const Player = ({
  placeNewTagMode,
  currentTag
}: Props): JSX.Element => {

  let newTagLayerComponent = null;
  if (placeNewTagMode) newTagLayerComponent = <NewTagLayerContainer />;

  let currentTagPanel = null;
  if (currentTag)
    currentTagPanel = <TagPanelContainer {...{ ID: currentTag }} />;

  return (
    <div>
      <div className="box video-box">
        <div className="augmented-video">
          <VideoContainer />
          <SeekPreview />
          <GraphicalAugmentation />
          <AugmentationContainer />
          {newTagLayerComponent}
        </div>
        <SeekBar />
        <ControlPanel />
        {currentTagPanel}
      </div>
    </div>
  );
};

export default Player;
