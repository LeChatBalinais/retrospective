import React from 'react';
import TagContainer from '../containers/TagContainer';

interface Props {
  tagIDs: string[];
}

const Augmentation = ({ tagIDs }: Props): JSX.Element => {
  const tagContainers = tagIDs.map(
    (tagID: string): React.ReactNode => (
      <TagContainer {...{ key: tagID, tagID }} />
    )
  );
  return (
    <svg className="augmentation" id="bounds">
      {tagContainers}
    </svg>
  );
};

export default Augmentation;
