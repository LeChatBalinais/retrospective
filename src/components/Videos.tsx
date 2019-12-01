import React, { useEffect } from 'react';

export interface ValueProps {
  videos: { globalID: string, name: string }[]
}

export interface FuncProps {
  onComponentDidMount?: () => void;
}


type Props = ValueProps & FuncProps;

const TagTable = ({ videos, onComponentDidMount }: Props): JSX.Element => {

  useEffect((): void => {
    onComponentDidMount();
  }, [onComponentDidMount]);

  const videoIDsLinks = videos.map(
    ({ globalID, name }: { globalID: string, name: string }): JSX.Element => <div {...{ key: globalID }} className="box">{name} </div>
  );

  return (
    <div className="box markers-list">
      <div>{videoIDsLinks}</div>
    </div>
  );
};

export default TagTable;
