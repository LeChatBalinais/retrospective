import { connect } from 'react-redux';
import Video, { ValueProps, FuncProps } from '~/components/Video';
import { State } from '~/state';

import { getVideoURL } from '~/getters/ videos';

interface Props {
  videoID: string;
}

const mapStateToProps = (state: State, { videoID }: Props): ValueProps => {
  return {
    playback: false,
    url: getVideoURL(state, videoID),
    seek: false,
    timeSeekTo: 0
  };
};

const mapDispatchToProps = (): FuncProps => ({
  onTimeUpdate: (): void => {
    // do something
  },
  onDurationChange: (): void => {
    // do something
  },
  onSeeking: (): void => {
    // do something
  },
  onSeeked: (): void => {
    // do something
  },
  onPlaying: (): void => {
    // do something
  },
  onPause: (): void => {
    // do something
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Video);
