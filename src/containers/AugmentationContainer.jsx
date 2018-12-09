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

const mapStateToProps = ({
  superVideoState: { currentTime },
  tags: { allIDs: tagIDs, byID }
}) => {
  const result = {
    tagIDs: tagIDs.filter(ID => {
      if (byID[ID].path.length === 0) return false;

      if (byID[ID].dragged) return true;

      if (
        currentTime >= byID[ID].path[0].time &&
        currentTime <= byID[ID].path[byID[ID].path.length - 1].time
      )
        return true;
      return false;
    })
  };
  return result;
};

export default connect(mapStateToProps)(AugmentationContainer);
