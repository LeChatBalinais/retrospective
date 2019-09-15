import { MOUSE_DOWN_ON_SEEK_BAR, MouseDownOnSeekBar } from '~/actions';
import { State, SeekbarStatus, SeekingStatus } from '~/types';

const mouseDownOnSeekbar = (
  state: State,
  { payload: { position } }: MouseDownOnSeekBar
): State => {
  const { player } = state;

  const {
    lastRequestedStage,
    seekingStatus,
    seekbar: { status: seekbarStatus }
  } = player;

  if (
    seekbarStatus === SeekbarStatus.Seeking &&
    lastRequestedStage === position &&
    seekingStatus === SeekingStatus.SeekbarSeeking
  )
    return state;

  return {
    ...state,
    player: {
      ...player,
      lastRequestedStage: position,
      seekingStatus: SeekingStatus.SeekbarSeeking,
      seekbar: {
        status: SeekbarStatus.Seeking
      }
    }
  };
};

export default {
  actionType: MOUSE_DOWN_ON_SEEK_BAR,
  reducer: mouseDownOnSeekbar
};

// import { MOUSE_DOWN_ON_SEEK_BAR, MouseDownOnSeekBarPayload } from '~/actions';
// import { State, SeekbarStatus, SeekingStatus } from '~/types';
// import createReducer from '~/utils/create-reducer';
// import { createPartialReducer } from '~/utils/create-partial-reducer';
// import {
//   getLastRequestedStage,
//   getSeekbarStatus,
//   getSeekingStatus
// } from '~/selectors/common';
// import { setLastRequestedStage, setSeekingStatus } from '~/reducers/base';

// const getPosition = (
//   state: State,
//   { position }: MouseDownOnSeekBarPayload
// ): number => position;

// const calculateLastRequestedStage = (
//   position: number,
//   seekbarStatus: SeekbarStatus,
//   seekingStatus: SeekingStatus,
//   prevLastRequestedStage: number
// ): number => {
//   return seekbarStatus === SeekbarStatus.Seeking &&
//     prevLastRequestedStage === position &&
//     seekingStatus === SeekingStatus.SeekbarSeeking
//     ? prevLastRequestedStage
//     : position;
// };

// const calculateSeekingStatus = (
//   position: number,
//   seekbarStatus: SeekbarStatus,
//   lastRequestedStage: number,
//   prevSeekingStatus: SeekingStatus
// ): SeekingStatus => {
//   return seekbarStatus === SeekbarStatus.Seeking &&
//     lastRequestedStage === position &&
//     prevSeekingStatus === SeekingStatus.SeekbarSeeking
//     ? prevSeekingStatus
//     : SeekingStatus.Seeking;
// };

// const partialReducers = [
//   createPartialReducer(
//     getLastRequestedStage,
//     setLastRequestedStage,
//     calculateLastRequestedStage,
//     [getPosition, getSeekbarStatus, getSeekingStatus, getLastRequestedStage]
//   ),
//   createPartialReducer(
//     getSeekingStatus,
//     setSeekingStatus,
//     calculateSeekingStatus,
//     [getPosition, getSeekbarStatus, getLastRequestedStage, getSeekingStatus]
//   )
// ];

// export default {
//   actionType: MOUSE_DOWN_ON_SEEK_BAR,
//   reducer: createReducer(partialReducers)
// };
