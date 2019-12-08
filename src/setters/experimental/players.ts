import { addElementToTable } from '../table';
import { State } from '~/state';

import { Player } from '~/state/experimental/players';

export const addNewPlayer = (
  state: State,
  { videoID }: { videoID: string }
): State => ({
  ...state,
  entities: {
    ...state.entities,
    players: addElementToTable<Player>(state.entities.players, {
      videoID
    })
  }
});
