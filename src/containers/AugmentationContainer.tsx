import React from 'react';
import { connect } from 'react-redux';
import Augmentation from '../components/Augmentation';
import { State } from '../types/state';

interface Props {
  tagIDs: string[];
}

const AugmentationContainer = (props: Props): JSX.Element => (
  <Augmentation {...props} />
);

const mapStateToProps = ({
  superVideoState: { currentTime },
  tags: { allIDs: tagIDs, byID },
  draggedTags
}: State): Props => {
  const result = {
    tagIDs: tagIDs.filter(
      (ID: string): boolean => {
        if (byID[ID].path.length === 0) return false;

        if (draggedTags.includes(ID)) return true;

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

export default connect(mapStateToProps)(AugmentationContainer);
