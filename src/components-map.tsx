import React from 'react'
import Videos from "./containers/videos"
import Player from './containers/player'
import NewTagButton from './containers/new-tag-button'
import TagListContainer from "./containers/tag-list";


const Home = <Videos />
const ReferenceEditor = <div className="section main-section">
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

export default { Home, ReferenceEditor }