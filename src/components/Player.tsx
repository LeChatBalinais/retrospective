import React from 'react';
import ControlPanel from './ControlPanel';
import VideoContainer from '../containers/Video';
import NewTagLayerContainer from '../containers/NewTagLayer';
import AugmentationContainer from '../containers/Augmentation';
import SeekBar from '../containers/SeekBar';
import ActiveTagsPanel from '../containers/ActiveTagsPanel';
import TagPanelContainer from '../containers/TagPanel';
import GraphicalAugmentation from '../containers/GraphicalAugmentation';

export interface ValueProps {
  placeNewTagMode: boolean;
  currentTag: string;
}

export interface FuncProps {
  onComponentDidMount: () => void;
}

type Props = ValueProps & FuncProps;

export class Player extends React.Component<Props, {}> {
  public componentDidMount(): void {
    const { onComponentDidMount } = this.props;

    onComponentDidMount();
  }

  public render(): JSX.Element {
    const { placeNewTagMode, currentTag } = this.props;

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
  }
}
