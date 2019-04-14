import React from 'react';
import { connect } from 'react-redux';
import TagRow from '../components/TagRow';

const AugmentationContainer = ({ ID, tag }) => <TagRow {...{ ID, tag }} />;

const mapStateToProps = ({ tags: { byID } }, { ID }) => {
  return {
    ID,
    tag: byID[ID]
  };
};

export default connect(mapStateToProps)(AugmentationContainer);
