import { Tags } from './tags';
import { Videos } from './videos';
import { Players } from './players';
import { FormalCompositions } from './formal-compositions';

export interface Entities {
  tags: Tags;
  videos: Videos;
  players: Players;
  formalCompositions: FormalCompositions;
}
