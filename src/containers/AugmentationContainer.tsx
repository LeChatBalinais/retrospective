import React from 'react';
import { connect } from 'react-redux';
import Augmentation from '../components/Augmentation';
import { State } from '../types/state';
import store from '../store';
import { setCurrentTag, updateTagPath, setDraggedTag } from '../actionCreators';

interface Props {
  tagIDs: string[];
  draggedTag: string;
}

const AugmentationContainer = (props: Props): JSX.Element => (
  <Augmentation
    {...props}
    {...{
      onMouseDown: (): void => {
        store.dispatch(setCurrentTag(undefined));
      },
      onMouseMove: (x: number, y: number): void => {
        if (props.draggedTag)
          store.dispatch(updateTagPath(props.draggedTag, x, y));
      },
      onMouseUp: (x: number, y: number): void => {
        if (props.draggedTag) {
          store.dispatch(updateTagPath(props.draggedTag, x, y));
          store.dispatch(setDraggedTag(undefined));
        }
      }
    }}
  />
);

const mapStateToProps = ({
  superVideoState: { currentTime },
  tags: { allIDs: tagIDs, byID },
  draggedTag
}: State): Props => {
  const result = {
    tagIDs: tagIDs.filter(
      (ID: string): boolean => {
        if (byID[ID].path.length === 0) return false;

        if (draggedTag === ID) return true;

        if (
          currentTime >= byID[ID].path[0].time &&
          currentTime <= byID[ID].path[byID[ID].path.length - 1].time
        )
          return true;
        return false;
      }
    ),
    draggedTag
  };
  return result;
};

export default connect(mapStateToProps)(AugmentationContainer);
