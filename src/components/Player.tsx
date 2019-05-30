import React from 'react';
import ControlPanel from './ControlPanel';
import VideoContainer from '../containers/VideoContainer';
import NewTagLayerContainer from '../containers/NewTagLayerContainer';
import AugmentationContainer from '../containers/AugmentationContainer';

interface Props {
  placeNewTagMode: boolean;
}

class Player extends React.Component<Props, {}> {
  public componentDidMount(): void {}

  public render(): JSX.Element {
    const { placeNewTagMode } = this.props;

    let newTagComponent = null;
    if (placeNewTagMode) newTagComponent = <NewTagLayerContainer />;

    return (
      <div>
        <div className="box video-box">
          <div className="augmented-video">
            <VideoContainer />
            <AugmentationContainer />
            {newTagComponent}
          </div>
          <ControlPanel />
        </div>
      </div>
    );
  }
}

export default Player;
