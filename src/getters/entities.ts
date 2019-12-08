import { State, Tags } from '~/state';
import { Videos } from '~/state/videos';
import { Players } from '~/state/experimental/players';

export const getTagsTable = ({ entities: { tags } }: State): Tags => tags;

export const getVideosTable = ({ entities: { videos } }: State): Videos =>
  videos;

export const getPlayersTable = ({ entities: { players } }: State): Players =>
  players;
