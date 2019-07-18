import React from 'react';
import { connect } from 'react-redux';
import GraphicalAugmentationComponent from '../components/GraphicalAugmentation';
import { State } from '../types/state';

interface Props {
  tagIDs: string[];
}

const GraphicalAugmentation = ({ tagIDs }: Props): JSX.Element => (
  <GraphicalAugmentationComponent {...{ tagIDs }} />
);

const mapStateToProps = ({
  superVideoState: { currentTime },
  tags: { allIDs: tagIDs, byID }
}: State): Props => {
  const result = {
    tagIDs: tagIDs.filter(
      (ID: string): boolean => {
        if (byID[ID].path.length === 0) return false;

        if (
          currentTime >= byID[ID].path[0].time &&
          currentTime <= byID[ID].path[byID[ID].path.length - 1].time
        )
          return true;
        return false;
      }
    )
  };
  return result;
};

export default connect(mapStateToProps)(GraphicalAugmentation);
