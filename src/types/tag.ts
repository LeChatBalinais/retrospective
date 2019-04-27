export default interface Tag {
  readonly startTime: number;
  readonly x: number;
  readonly y: number;
  readonly path: { time: number; x: number; y: number }[];
}
