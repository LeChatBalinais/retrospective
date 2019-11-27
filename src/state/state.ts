import { Player } from './players';
import { Entities } from './entities';
import { Footage } from './footages';
import { TagEditor } from './tag-editor';

export interface State {
  readonly entities: Entities;
  readonly tagEditor: TagEditor;
  readonly footage: Footage;
  readonly player: Player;
}
