import { v4 as uuid } from 'uuid';
import { Table } from '~/state';

export function addElementToTable<T>(table: Table<T>, instance: T): Table<T>;

export function addElementToTable<T>(
  table: Table<T>,
  instance: T,
  globalID: string
): Table<T>;

export function addElementToTable<T>(
  table: Table<T>,
  instance: T,
  globalID?: string
): Table<T> {
  let ID = globalID;

  if (ID === undefined) ID = uuid();

  return {
    byID: {
      ...table.byID,
      [ID]: instance
    },
    allIDs: [...table.allIDs, ID]
  };
}

export function removeElementFromTable<T>(
  { byID: prevByID, allIDs }: Table<T>,
  ID: string
): Table<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { [ID]: removedTag, ...byID } = prevByID;

  const index = allIDs.findIndex((element: string): boolean => element === ID);

  return {
    byID,
    allIDs: [...allIDs.slice(0, index), ...allIDs.slice(index + 1)]
  };
}

export function updateElementInTable<T>(
  { byID, allIDs }: Table<T>,
  ID: string,
  element: T
): Table<T> {
  return {
    allIDs,
    byID: {
      ...byID,
      [ID]: element
    }
  };
}
