export default function newMouseListener(
  onMouseUp: () => void,
  onMouseDown: (relativePosition: number) => void,
  onMouseMove: (relativePosition: number) => void,
  getTargetTarget: () => HTMLDivElement
): (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void {
  const mouseMoveListener = (e: MouseEvent): void => {
    const ribbonRect = getTargetTarget().getBoundingClientRect();

    let relativePosition =
      ((e.clientX - (ribbonRect.left + 7)) / (ribbonRect.width - 14)) * 100;

    if (relativePosition < 0) relativePosition = 0;
    else if (relativePosition > 100) relativePosition = 100;

    onMouseMove(relativePosition);
  };

  const mouseUpListener = (): void => {
    document.removeEventListener('mousemove', mouseMoveListener);
    document.removeEventListener('mouseup', mouseUpListener);
    onMouseUp();
  };

  return (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const ribbonRect = getTargetTarget().getBoundingClientRect();

    let relativePosition =
      ((event.clientX - (ribbonRect.left + 7)) / (ribbonRect.width - 14)) * 100;

    if (relativePosition < 0) relativePosition = 0;
    else if (relativePosition > 100) relativePosition = 100;

    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);

    onMouseDown(relativePosition);
  };
}
