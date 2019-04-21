import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Button from '../components/Button';
import { setPlayback } from '../actionCreators';

const PlayButtonContainer = ({ playback }) => {
  let caption = 'Play';

  if (playback) caption = 'Pause';

  return (
    <Button
      caption={caption}
      onPress={() => {
        store.dispatch(setPlayback(!playback));
      }}
    />
  );
};

const mapStateToProps = ({ superVideoState: { playback } }) => ({ playback });

export default connect(mapStateToProps)(PlayButtonContainer);