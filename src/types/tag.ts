export default interface Tag {
  readonly start: number;
  readonly x: number;
  readonly y: number;
  readonly path: { time: number; x: number; y: number }[];
}
