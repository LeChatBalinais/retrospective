import { LocationState } from 'redux-first-router';
import { Player } from './players';
import { Entities } from './entities';
import { TagEditor } from './tag-editor';

export interface State {
  readonly location?: LocationState;
  readonly page: string;
  readonly entities: Entities;
  readonly tagEditor: TagEditor;
  readonly player: Player;
}
