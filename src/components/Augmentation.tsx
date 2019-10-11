import React, { useRef, useCallback } from 'react';
import TagContainer from '~/containers/Tag';

export interface ValueProps {
  tagIDs: string[];
  reactOnMouseMove: boolean;
}

export interface FuncProps {
  onMouseDown: () => void;
  onMouseMove: (x: number, y: number) => void;
  onMouseUp: (x: number, y: number) => void;
}

type Props = ValueProps & FuncProps;

const Augmentation = ({
  tagIDs,
  reactOnMouseMove,
  onMouseDown,
  onMouseMove,
  onMouseUp
}: Props): JSX.Element => {
  const divEl = useRef(null);

  const onMouseMoveFunc = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      if (!reactOnMouseMove || !onMouseMove) return;

      const area = divEl.current.getBoundingClientRect();

      let relativePositionX = ((e.clientX - area.left) / area.width) * 100;

      if (relativePositionX < 0) relativePositionX = 0;
      else if (relativePositionX > 100) relativePositionX = 100;

      let relativePositionY = ((e.clientY - area.top) / area.height) * 100;

      if (relativePositionY < 0) relativePositionY = 0;
      else if (relativePositionY > 100) relativePositionY = 100;

      onMouseMove(relativePositionX, relativePositionY);
    },
    [onMouseMove, reactOnMouseMove]
  );

  const onMouseUpFunc = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      if (!onMouseUp) return;

      const area = divEl.current.getBoundingClientRect();

      let relativePositionX = ((e.clientX - area.left) / area.width) * 100;

      if (relativePositionX < 0) relativePositionX = 0;
      else if (relativePositionX > 100) relativePositionX = 100;

      let relativePositionY = ((e.clientY - area.top) / area.height) * 100;

      if (relativePositionY < 0) relativePositionY = 0;
      else if (relativePositionY > 100) relativePositionY = 100;

      onMouseUp(relativePositionX, relativePositionY);
    },
    [onMouseUp]
  );

  const tagContainers = tagIDs.map(
    (tagID: string): React.ReactNode => (
      <TagContainer {...{ key: tagID, ID: tagID }} />
    )
  );

  return (
    /* eslint-disable-next-line */
    <div
      className="augmentation"
      ref={divEl}
      {...{
        onMouseDown,
        onMouseMove: onMouseMoveFunc,
        onMouseUp: onMouseUpFunc
      }}
    >
      {tagContainers}
    </div>
  );
};

export default Augmentation;
