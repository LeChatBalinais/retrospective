export interface MouseListenerProps {
  onMouseUp: () => void;

  onMouseDown: (relativePosition: number) => void;

  onMouseMove: (relativePosition: number) => void;

  getTarget: () => HTMLDivElement;
}

export function newMouseListenerProps(
  onMouseUp: () => void,
  onMouseDown: (relativePosition: number) => void,
  onMouseMove: (relativePosition: number) => void,
  getTarget: () => HTMLDivElement,
  prevMouseListenerProps: MouseListenerProps
): MouseListenerProps {
  let newProps = prevMouseListenerProps;

  if (!prevMouseListenerProps)
    return { onMouseUp, onMouseDown, onMouseMove, getTarget };

  if (onMouseUp !== prevMouseListenerProps.onMouseUp)
    newProps = { onMouseUp, ...prevMouseListenerProps };

  if (onMouseDown !== prevMouseListenerProps.onMouseDown)
    newProps = { onMouseDown, ...prevMouseListenerProps };

  if (onMouseMove !== prevMouseListenerProps.onMouseMove)
    newProps = { onMouseMove, ...prevMouseListenerProps };

  if (getTarget !== prevMouseListenerProps.getTarget)
    newProps = { getTarget, ...prevMouseListenerProps };

  return newProps;
}

export function newMouseListener(
  prevProps: MouseListenerProps,
  newProps: MouseListenerProps,
  prevListener: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
): (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void {
  if (prevProps === newProps && prevListener) return prevListener;

  const mouseMoveListener = (e: MouseEvent): void => {
    const ribbonRect = newProps.getTarget().getBoundingClientRect();

    let relativePosition =
      ((e.clientX - ribbonRect.left) / ribbonRect.width) * 100;

    if (relativePosition < 0) relativePosition = 0;
    else if (relativePosition > 100) relativePosition = 100;

    newProps.onMouseMove(relativePosition);
  };

  const mouseUpListener = (): void => {
    document.removeEventListener('mousemove', mouseMoveListener);
    document.removeEventListener('mouseup', mouseUpListener);
    newProps.onMouseUp();
  };

  return (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
    const ribbonRect = newProps.getTarget().getBoundingClientRect();

    const relativePosition =
      ((event.clientX - ribbonRect.left) / ribbonRect.width) * 100;

    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);

    newProps.onMouseDown(relativePosition);
  };
}
