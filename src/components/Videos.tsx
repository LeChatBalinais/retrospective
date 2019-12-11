import React from 'react';
import Link from 'redux-first-router-link';
import { actionCreator } from '../actions-reducers/route-reference-editor';

export interface ValueProps {
  videos: { videoID: string; name: string }[];
}

type Props = ValueProps;

const TagTable = ({ videos }: Props): JSX.Element => {
  const videoIDsLinks = videos.map(
    ({ videoID, name }: { videoID: string; name: string }): JSX.Element => (
      <div {...{ key: videoID }} className="box">
        <Link to={actionCreator({ videoID })}>{name}</Link>
      </div>
    )
  );

  return (
    <div className="box markers-list">
      <div>{videoIDsLinks}</div>
    </div>
  );
};

export default TagTable;
