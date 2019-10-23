import React from 'react';
import TagRowContainer from '~/containers/tag-row';

export interface ValueProps {
  beforeExposed: string[];
  exposed: string[];
  afterExposed: string[];
}

type Props = ValueProps;

const TagTable = ({
  beforeExposed,
  exposed,
  afterExposed
}: Props): JSX.Element => {
  const sortedIDsOfTagsBeforeExposed = beforeExposed.map(
    (ID: string): JSX.Element => <TagRowContainer {...{ key: ID, ID }} />
  );
  const sortedIDsOfExposedTags = exposed.map(
    (ID: string): JSX.Element => <TagRowContainer {...{ key: ID, ID }} />
  );
  const sortedIDsOfTagsAfterExposed = afterExposed.map(
    (ID: string): JSX.Element => <TagRowContainer {...{ key: ID, ID }} />
  );

  return (
    <div className="box markers-list">
      <div>{sortedIDsOfTagsBeforeExposed}</div>
      <div
        className="box"
        {...{ style: { boxShadow: '0 2px 3px red, 0 0 0 1px red' } }}
      >
        {sortedIDsOfExposedTags}
      </div>
      <div>{sortedIDsOfTagsAfterExposed}</div>
    </div>
  );
};

export default TagTable;
