import React from 'react';
import ControlPanel from './ControlPanel';
import VideoContainer from '../containers/VideoContainer';
import NewTagLayerContainer from '../containers/NewTagLayerContainer';
import AugmentationContainer from '../containers/AugmentationContainer';
import SeekBar from './SeekBar';

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
            <AugmentationContainer />
            {newTagLayerComponent}
          </div>
          <SeekBar />
          <ControlPanel />
        </div>
      </div>
    );
  }
}

export default Player;
