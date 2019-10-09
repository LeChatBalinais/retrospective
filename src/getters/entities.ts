import { State, Tags } from '~/state';

export const getTagsTable = ({ entities: { tags } }: State): Tags => tags;
