export const timeIsCloseEnough = (t1: number, t2: number): boolean =>
  Math.abs(t1 - t2) < 0.00001;
