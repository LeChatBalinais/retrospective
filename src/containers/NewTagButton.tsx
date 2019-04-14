import React from 'react';
import { connect } from 'react-redux';
import store from '../store';
import Button from '../components/Button';
import { setPlaceNewTagMode } from '../actionCreators';

const PlayButtonContainer = ({ placeNewTagMode }) => {
  let caption = 'Place New Tag';

  if (placeNewTagMode) caption = 'X';

  return (
    <Button
      caption={caption}
      onPress={() => {
        store.dispatch(setPlaceNewTagMode(!placeNewTagMode));
      }}
    />
  );
};

const mapStateToProps = ({ editorState: { placeNewTagMode } }) => ({
  placeNewTagMode
});

export default connect(mapStateToProps)(PlayButtonContainer);
