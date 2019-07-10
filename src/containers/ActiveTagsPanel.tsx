import React from 'react';
import { connect } from 'react-redux';
import ActiveTagsPanel from '../components/ActiveTagsPanel';
import { State } from '../types/state';

interface Props {
  IDs: string[];
}

const TagTableContainer = ({ IDs }: Props): JSX.Element => (
  <ActiveTagsPanel {...{ IDs }} />
);

const mapStateToProps = ({
  superVideoState: { currentTime },
  tags: { allIDs: IDs, byID }
}: State): Props => {
  return {
    IDs: IDs.filter(
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
};

export default connect(mapStateToProps)(TagTableContainer);
