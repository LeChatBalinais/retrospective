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
  tags: { byID },
  visibleTraceTags
}: State): Props => {
  const result = {
    tagIDs: visibleTraceTags.filter(
      (ID: string): boolean => {
        if (byID[ID].path.length === 0) return false;

        return true;
      }
    )
  };
  return result;
};

export default connect(mapStateToProps)(GraphicalAugmentation);
