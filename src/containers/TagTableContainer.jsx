// @flow
import React from 'react';
import { connect } from 'react-redux';
import TagTable from '../components/TagTable';

type Props = {
  IDs: Array<string>
};

const TagTableContainer = ({ IDs }: Props) => <TagTable {...{ IDs }} />;

const mapStateToProps = ({ tags: { allIDs: IDs } }) => {
  return { IDs };
};

export default connect(mapStateToProps)(TagTableContainer);
