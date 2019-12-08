import { ActionTemplate } from '~/utils/action-template';
import { makeActionCreator } from '~/utils/make-action-creator';
import { createReducer } from '~/utils/create-reducer';
import { State } from '~/state';
import { getPlayersTable } from '~/getters/entities';
import { setPlayersTable } from '~/setters/entities';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';
import { Players } from '~/state/experimental/players';
import { addElementToTable } from '~/setters/table';

export type ActionID = 'ROUTE_COMPOSITION_PLAYER';
export const ACTION_ID = 'ROUTE_COMPOSITION_PLAYER';

export interface Payload {
  compositionID: string;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getVideoIDs = (state: State, { compositionID }: Payload): string[] => {
  const {
    entities: {
      formalCompositions: {
        byID: { [compositionID]: composition }
      }
    }
  } = state;

  return [];
};

const getNewPlayersTable = (players: Players, videoIDs: string[]): Players => {
  let newPlayers = players;

  videoIDs.forEach((videoID: string): void => {
    newPlayers = addElementToTable(newPlayers, { videoID });
  });

  return newPlayers;
};

export const reducer = createReducer(ACTION_ID, [
  [
    getPlayersTable,
    setPlayersTable,
    mapStateToDeterminer(getNewPlayersTable, [getPlayersTable, getVideoIDs])
  ]
]);
