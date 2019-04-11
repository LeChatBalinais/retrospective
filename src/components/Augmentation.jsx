// @flow
import React from 'react';
import TagContainer from '../containers/TagContainer';

type Props = {
  tagIDs: Array<string>
};

const Augmentation = ({ tagIDs }: Props) => {
  const tagContainers = tagIDs.map(tagID => (
    <TagContainer {...{ key: tagID, tagID }} />
  ));
  return (
    <svg className="augmentation" id="bounds">
      {tagContainers}
    </svg>
  );
};

export default Augmentation;
