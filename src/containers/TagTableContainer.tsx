import React from 'react';
import { connect } from 'react-redux';
import TagTable from '../components/TagTable';
import { State } from '../types/state';

interface Props {
  IDs: string[];
}

const TagTableContainer = ({ IDs }: Props): JSX.Element => (
  <TagTable {...{ IDs }} />
);

const mapStateToProps = ({ tags: { allIDs: IDs } }: State): Props => {
  return { IDs };
};

export default connect(mapStateToProps)(TagTableContainer);
