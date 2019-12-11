import { v4 as uuid } from 'uuid';
import { GlobalEntityTable } from '~/state';
import * as table from './table';

export function addElementToTable<T>(
  globalEntityTable: GlobalEntityTable<T>,
  instance: T
): GlobalEntityTable<T>;

export function addElementToTable<T>(
  globalEntityTable: GlobalEntityTable<T>,
  instance: T,
  ID: string
): GlobalEntityTable<T>;

export function addElementToTable<T>(
  globalEntityTable: GlobalEntityTable<T>,
  instance: T,
  ID?: string
): GlobalEntityTable<T> {
  if (ID !== undefined) {
    return {
      ...table.addElementToTable(globalEntityTable, instance, ID),
      localOnly: globalEntityTable.localOnly
    };
  }

  const localID = uuid();
  return {
    ...table.addElementToTable(globalEntityTable, instance, localID),
    localOnly: [...globalEntityTable.localOnly, localID]
  };
}

export function removeElementFromTable<T>(
  globalEntityTable: GlobalEntityTable<T>,
  ID: string
): GlobalEntityTable<T> {
  let { localOnly } = globalEntityTable;

  const index = localOnly.findIndex(
    (element: string): boolean => element === ID
  );

  if (index > -1)
    localOnly = [...localOnly.slice(0, index), ...localOnly.slice(index + 1)];

  return {
    ...table.removeElementFromTable(globalEntityTable, ID),
    localOnly
  };
}

export function updateElementInTable<T>(
  globalEntityTable: GlobalEntityTable<T>,
  ID: string,
  element: T
): GlobalEntityTable<T> {
  return {
    ...table.updateElementInTable(globalEntityTable, ID, element),
    localOnly: globalEntityTable.localOnly
  };
}

export function makeElementGlobal<T>(
  globalEntityTable: GlobalEntityTable<T>,
  ID: string,
  globalID: string
): GlobalEntityTable<T> {
  let newTable = addElementToTable(
    globalEntityTable,
    globalEntityTable.byID[ID],
    globalID
  );
  newTable = removeElementFromTable(newTable, ID);

  return newTable;
}
