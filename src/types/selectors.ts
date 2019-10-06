export default interface Tag {
  readonly name: string;
  readonly appearsAt: number;
  readonly disapearsAt: number;
  readonly traceIsVisible: boolean;
  readonly isEdited: boolean;
  readonly isCurrent: boolean;
  readonly path: { time: number; x: number; y: number }[];
}
