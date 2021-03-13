import { State, Tags } from '~/state';
import { Videos } from '~/state/videos';

export const getTagsTable = ({ entities: { tags } }: State): Tags => tags;

export const getVideosTable = ({ entities: { videos } }: State): Videos =>
  videos;
