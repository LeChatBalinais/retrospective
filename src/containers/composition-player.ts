import { connect } from 'react-redux';
import CompositionPlayer, {
  ValueProps as CompositionPlayerValueProps
} from '~/components/CompositionPlayer';
import { State } from '~/state';

const mapStateToProps = ({
  location: {
    payload: { compositionID }
  }
}: State): CompositionPlayerValueProps => ({
  compositionID
});

export default connect(mapStateToProps)(CompositionPlayer);
