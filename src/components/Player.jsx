// @flow
import React from 'react';
import ControlPanel from './ControlPanel';
import VideoContainer from '../containers/VideoContainer';
import NewTagLayerContainer from '../containers/NewTagLayerContainer';
import AugmentationContainer from '../containers/AugmentationContainer';

type Props = {
  placeNewTagMode: boolean
};

type State = {};

class Player extends React.Component<Props, State> {
  onTagAdded: void => void;

  player: any;

  render() {
    const { placeNewTagMode } = this.props;

    let newTagComponent = null;
    if (placeNewTagMode) newTagComponent = <NewTagLayerContainer />;

    return (
      <div>
        <VideoContainer />
        <AugmentationContainer />
        {newTagComponent}
        <ControlPanel />
      </div>
    );
  }
}

export default Player;
