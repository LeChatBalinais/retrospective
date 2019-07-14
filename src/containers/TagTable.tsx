import React from 'react';
import { connect } from 'react-redux';
import TagTableComponent from '../components/TagTable';
import { State } from '../types/state';

interface Props {
  IDs: string[];
}

const TagTable = ({ IDs }: Props): JSX.Element => (
  <TagTableComponent {...{ IDs }} />
);

const mapStateToProps = ({ tags: { allIDs: IDs } }: State): Props => {
  return { IDs };
};

export default connect(mapStateToProps)(TagTable);
