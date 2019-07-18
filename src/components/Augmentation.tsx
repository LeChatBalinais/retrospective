import React from 'react';
import TagContainer from '../containers/Tag';

interface Props {
  tagIDs: string[];
  onMouseDown: () => void;
  onMouseMove: (x: number, y: number) => void;
  onMouseUp: (x: number, y: number) => void;
}

class Augmentation extends React.Component<Props, {}> {
  public constructor(props: Props) {
    super(props);

    this.setRef = (area: HTMLDivElement): void => {
      this.area = area;
    };

    this.getTarget = (): HTMLDivElement => {
      return this.area;
    };

    this.onMouseUp = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
      if (!this.onMouseMoveFunc) return;

      const area = this.getTarget().getBoundingClientRect();

      let relativePositionX = ((e.clientX - area.left) / area.width) * 100;

      if (relativePositionX < 0) relativePositionX = 0;
      else if (relativePositionX > 100) relativePositionX = 100;

      let relativePositionY = ((e.clientY - area.top) / area.height) * 100;

      if (relativePositionY < 0) relativePositionY = 0;
      else if (relativePositionY > 100) relativePositionY = 100;

      this.onMouseUpFunc(relativePositionX, relativePositionY);
    };

    this.onMouseMove = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
      if (!this.onMouseMoveFunc) return;

      const area = this.getTarget().getBoundingClientRect();

      let relativePositionX = ((e.clientX - area.left) / area.width) * 100;

      if (relativePositionX < 0) relativePositionX = 0;
      else if (relativePositionX > 100) relativePositionX = 100;

      let relativePositionY = ((e.clientY - area.top) / area.height) * 100;

      if (relativePositionY < 0) relativePositionY = 0;
      else if (relativePositionY > 100) relativePositionY = 100;

      this.onMouseMoveFunc(relativePositionX, relativePositionY);
    };
  }

  private onMouseMove: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;

  private onMouseUp: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;

  private onMouseMoveFunc: (x: number, y: number) => void;

  private onMouseUpFunc: (x: number, y: number) => void;

  private getTarget: () => HTMLDivElement;

  private setRef: (area: HTMLDivElement) => void;

  private area: HTMLDivElement;

  public render(): JSX.Element {
    const { tagIDs, onMouseDown, onMouseMove, onMouseUp } = this.props;

    this.onMouseMoveFunc = onMouseMove;
    this.onMouseUpFunc = onMouseUp;

    const tagContainers = tagIDs.map(
      (tagID: string): React.ReactNode => (
        <TagContainer {...{ key: tagID, tagID }} />
      )
    );

    return (
      /* eslint-disable-next-line */
      <div
        className="augmentation"
        ref={this.setRef}
        {...{
          onMouseDown,
          onMouseMove: this.onMouseMove,
          onMouseUp: this.onMouseUp
        }}
      >
        {tagContainers}
      </div>
    );
  }
}

export default Augmentation;
