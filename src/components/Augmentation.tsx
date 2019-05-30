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
    <div className="augmentation" id="bounds">
      {tagContainers}
    </div>
  );
};

export default Augmentation;
