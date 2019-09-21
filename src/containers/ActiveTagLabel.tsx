import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import ActiveTagLabel, {
  ValueProps,
  FuncProps
} from '../components/ActiveTagLabel';
import { State } from '../types';
import { activeTagLabelClicked } from '~/actions';

interface Props {
  ID: string;
}

const mapDispatchToProps = (dispatch: Dispatch, { ID }: Props): FuncProps => ({
  onMouseDown: (): void => {
    dispatch(activeTagLabelClicked({ tagID: ID }));
  }
});

const mapStateToProps = (state: State, { ID }: Props): ValueProps => ({ ID });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTagLabel);
