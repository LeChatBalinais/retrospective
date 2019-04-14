import React from 'react';
import { connect } from 'react-redux';
import TagTable from '../components/TagTable';

const TagTableContainer = ({ IDs }) => <TagTable {...{ IDs }} />;

const mapStateToProps = ({ tags: { allIDs: IDs } }) => {
  return { IDs };
};

export default connect(mapStateToProps)(TagTableContainer);
