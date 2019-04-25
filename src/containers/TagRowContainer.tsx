import React from 'react';
import { connect } from 'react-redux';
import TagRow from '../components/TagRow';
import { State } from '../types/state';
import TagState from '../types/tag';

interface Props {
  ID: string;
  tag?: TagState;
}

const AugmentationContainer = ({ ID, tag }: Props): JSX.Element => (
  <TagRow {...{ ID, tag }} />
);

const mapStateToProps = ({ tags: { byID } }: State, { ID }: Props): Props => {
  return {
    ID,
    tag: byID[ID]
  };
};

export default connect(mapStateToProps)(AugmentationContainer);
