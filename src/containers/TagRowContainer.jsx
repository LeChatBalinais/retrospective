// @flow
import React from 'react';
import { connect } from 'react-redux';
import TagRow from '../components/TagRow';
import type { Marker } from '../state-types';

type Props = {
  ID: string,
  tag: Marker
};

const AugmentationContainer = ({ ID, tag }: Props) => (
  <TagRow {...{ ID, tag }} />
);

const mapStateToProps = ({ tags: { byID } }, { ID }) => {
  return {
    ID,
    tag: byID[ID]
  };
};

export default connect(mapStateToProps)(AugmentationContainer);
