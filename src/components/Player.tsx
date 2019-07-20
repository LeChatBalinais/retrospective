import React from 'react';
import ControlPanel from './ControlPanel';
import VideoContainer from '../containers/Video';
import NewTagLayerContainer from '../containers/NewTagLayer';
import AugmentationContainer from '../containers/Augmentation';
import SeekBar from '../containers/SeekBar';
import ActiveTagsPanel from '../containers/ActiveTagsPanel';
import TagPanelContainer from '../containers/TagPanel';
import GraphicalAugmentation from '../containers/GraphicalAugmentation';

interface Props {
  placeNewTagMode: boolean;
}

class Player extends React.Component<Props, {}> {
  public componentDidMount(): void { }

  public render(): JSX.Element {
    const { placeNewTagMode } = this.props;

    let newTagLayerComponent = null;
    if (placeNewTagMode) newTagLayerComponent = <NewTagLayerContainer />;

    return (
      <div>
        <div className="box video-box">
          <div className="augmented-video">
            <VideoContainer />
            <GraphicalAugmentation />
            <AugmentationContainer />
            {newTagLayerComponent}
          </div>
          <SeekBar />
          <ControlPanel />
          <ActiveTagsPanel />
          <TagPanelContainer />
        </div>
      </div>
    );
  }
}

export default Player;
