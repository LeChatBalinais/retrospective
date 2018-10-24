// @flow
import React from 'react';
import { connect } from 'react-redux';
import Tag from '../components/Tag';

type Props = {
  tagID: number,
  x: number,
  y: number
};

const TagContainer = ({ x, y }: Props) => (
  <Tag {...{ className: 'Tag', x, y }} />
);

const mapStateToProps = ({ tags: { byID } }, { tagID }: Props) => ({
  ...byID[tagID]
});

export default connect(mapStateToProps)(TagContainer);
