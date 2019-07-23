import React from 'react';
import { connect } from 'react-redux';
import TagTraceComponent from '../components/TagTrace';
import { State } from '../types/state';
import makeGetTagTracePoints from '../selectors/get-tag-trace-points';

interface Props {
  tagID: string;
  points?: string;
}

const TagTrace = ({ points }: Props): JSX.Element => (
  <TagTraceComponent {...{ points }} />
);

const makeMapStateToProps = (): ((state: State, props: Props) => Props) => {
  const getTagTracePoints = makeGetTagTracePoints();

  return (state: State, { tagID }: Props): Props => {
    const result = {
      tagID,
      points: getTagTracePoints(state, { ID: tagID })
    };
    return result;
  };
};

export default connect(makeMapStateToProps)(TagTrace);
