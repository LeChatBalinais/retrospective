import { Table, ElementsByID } from './table';

export interface FormalComposition {
  readonly globalID: string;
  readonly firstFormalReferenceID: string;
  readonly firstFormalReferenceKind: FormalReferenceKind;
  readonly secondFormalReferenceID: string;
  readonly secondFormalReferenceKind: FormalReferenceKind;
}

export enum FormalReferenceKind {
  Anchor
}

export type FormalCompositions = Table<FormalComposition>;

export type FormalCompositionsByID = ElementsByID<FormalComposition>;
