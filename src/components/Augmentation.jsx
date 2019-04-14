import React from 'react';
import TagContainer from '../containers/TagContainer';

const Augmentation = ({ tagIDs }) => {
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
