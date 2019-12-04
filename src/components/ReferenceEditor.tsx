import React from 'react';
import Player from '../containers/player';
import NewTagButton from '../containers/new-tag-button';
import TagListContainer from '../containers/tag-list';

const ReferenceEditor = (): JSX.Element => (
  <div className="section main-section">
    <div className="columns">
      <div className="column is-8">
        <Player />
      </div>
      <div className="column is-4">
        <NewTagButton />
        <TagListContainer />
      </div>
    </div>
  </div>
);

export default ReferenceEditor;
