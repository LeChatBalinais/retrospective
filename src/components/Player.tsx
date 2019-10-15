import React, { useEffect } from 'react';
import ControlPanel from './ControlPanel';
import VideoContainer from '~/containers/Video';
import NewTagLayerContainer from '~/containers/NewTagLayer';
import AugmentationContainer from '~/containers/Augmentation';
import SeekBar from '~/containers/SeekBar';
import ActiveTagsPanel from '~/containers/ActiveTagsPanel';
import TagPanelContainer from '~/containers/TagPanel';
import GraphicalAugmentation from '~/containers/GraphicalAugmentation';
import SeekPreview from '~/containers/SeekPreview';

export interface ValueProps {
  placeNewTagMode: boolean;
  currentTag: string;
}

export interface FuncProps {
  onComponentDidMount?: () => void;
}

type Props = ValueProps & FuncProps;

const Player = ({
  placeNewTagMode,
  currentTag,
  onComponentDidMount
}: Props): JSX.Element => {
  useEffect((): void => {
    onComponentDidMount();
  }, [onComponentDidMount]);

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
        <ActiveTagsPanel />
        {currentTagPanel}
      </div>
    </div>
  );
};

export default Player;
