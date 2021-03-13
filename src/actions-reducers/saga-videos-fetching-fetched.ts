import { ActionTemplate } from '~/utils/action-template';
import { State } from '~/state';
import { createReducer } from '~/utils/create-reducer';
import { setVideos } from '~/setters/entities';
import { getVideosTable } from '~/getters/entities';
import { makeActionCreator } from '~/utils/make-action-creator';
import { mapStateToDeterminer } from '~/utils/map-state-to-determiner';
import { Videos } from '~/state/videos';

export type ActionID = 'SAGA_VIDEOS_FETCHED';

export const ACTION_ID = 'SAGA_VIDEOS_FETCHED';

export interface Payload {
  videos: Videos;
}

export type Action = ActionTemplate<ActionID, Payload>;

export const actionCreator = makeActionCreator<ActionID, Payload>(ACTION_ID);

const getVideos = (state: State, { videos }: Payload): Videos => videos;

const getNewVideos = (videos: Videos): Videos => videos;

export const reducer = createReducer(ACTION_ID, [
  [getVideosTable, setVideos, mapStateToDeterminer(getNewVideos, [getVideos])]
]);
