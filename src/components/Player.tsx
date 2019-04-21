import React from 'react';
import ControlPanel from './ControlPanel';
import VideoContainer from '../containers/VideoContainer';
import NewTagLayerContainer from '../containers/NewTagLayerContainer';
import AugmentationContainer from '../containers/AugmentationContainer';
import TagTableContainer from '../containers/TagTableContainer';

interface Props {
  placeNewTagMode: boolean;
}

class Player extends React.Component<Props, any> {
  public componentDidMount() {}

  public render() {
    const { placeNewTagMode } = this.props;

    let newTagComponent = null;
    if (placeNewTagMode) newTagComponent = <NewTagLayerContainer />;

    return (
      <div>
        <VideoContainer />
        <AugmentationContainer />
        {newTagComponent}
        <ControlPanel />
        <TagTableContainer />
      </div>
    );
  }
}

export default Player;