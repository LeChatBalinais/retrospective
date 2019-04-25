import React from 'react';
import PlayButton from '../containers/PlayButton';
import NewTagButton from '../containers/NewTagButton';
import SeekBarContainer from '../containers/SeekBarContainer';

const ControlPanel = (): JSX.Element => (
  <div>
    <PlayButton />
    <NewTagButton />
    <SeekBarContainer />
  </div>
);
export default ControlPanel;
