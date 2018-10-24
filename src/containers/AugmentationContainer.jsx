// @flow
import React from 'react';
import { connect } from 'react-redux';
import Augmentation from '../components/Augmentation';

type Props = {
  tagIDs: Array<number>
};

const AugmentationContainer = ({ tagIDs }: Props) => (
  <Augmentation {...{ tagIDs }} />
);

const mapStateToProps = ({ tags: { allIDs: tagIDs } }) => ({
  tagIDs
});

export default connect(mapStateToProps)(AugmentationContainer);
