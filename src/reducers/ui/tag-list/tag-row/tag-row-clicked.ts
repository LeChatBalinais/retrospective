import { TagRowClicked, TAG_ROW_CLICKED } from '~/actions/tag-list';
import { State, SeekingStatus } from '~/types';

const tagRowClicked = (
  state: State,
  { payload: { tagID } }: TagRowClicked
): State => {
  const {
    player,
    entities: {
      tags: {
        byID: { [tagID]: tag }
      }
    },
    footage: { duration }
  } = state;

  const {
    seekingStatus: prevSeekingStatus,
    video: { atStage: videoAtStage }
  } = player;

  if (tag.path.length === 0) return state;

  let lastRequestedStage = tag.path[0].time / duration;
  let seekingStatus = SeekingStatus.Seeking;

  if (lastRequestedStage === videoAtStage) {
    lastRequestedStage = undefined;
    seekingStatus = prevSeekingStatus;
  }

  return {
    ...state,
    tagEditor: {
      ...state.tagEditor,
      currentTag: tagID
    },
    player: {
      ...player,
      seekingStatus,
      lastRequestedStage
    }
  };
};

export default {
  actionType: TAG_ROW_CLICKED,
  reducer: tagRowClicked
};
