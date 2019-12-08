import { connect } from 'react-redux';
import { Dispatch } from '~/utils/dispatch';
import Video, { ValueProps, FuncProps } from '~/components/Video';
import { State } from '~/state';
import { actionCreator as videoPlayedToTime } from '~/actions-reducers/ui-player-video-played-to-time';
import { actionCreator as videoSeeked } from '~/actions-reducers/ui-player-video-seeked';
import { actionCreator as videoSeeking } from '~/actions-reducers/ui-player-video-seeking';
import { actionCreator as videoDurationChanged } from '~/actions-reducers/ui-player-video-duration-changed';
import { actionCreator as videoPlaying } from '~/actions-reducers/ui-player-video-playing';
import { actionCreator as videoPaused } from '~/actions-reducers/ui-player-video-paused';

import { getVideoURL } from '~/getters/ videos';

interface Props {
  videoID: string;
}

const mapStateToProps = (state: State, { videoID }: Props): ValueProps => {
  console.log(getVideoURL(state, videoID));

  return {
    playback: false,
    url: getVideoURL(state, videoID),
    seek: false,
    timeSeekTo: 0
  };
};

const mapDispatchToProps = (dispatch: Dispatch): FuncProps => ({
  onTimeUpdate: (time: number): void => {},
  onDurationChange: (duration: number): void => {},
  onSeeking: (time: number): void => {},
  onSeeked: (): void => {},
  onPlaying: (): void => {},
  onPause: (): void => {}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Video);
