import { Dispatch } from 'react';
import { connect } from 'react-redux';
import ActiveTagLabel, {
  ValueProps,
  FuncProps
} from '../components/ActiveTagLabel';
import { Action, State } from '../types';
import setCurrentTag from '../actions/set-current-tag';

interface Props {
  ID: string;
}

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  { ID }: Props
): FuncProps => ({
  onMouseDown: (): void => {
    dispatch(setCurrentTag({ ID }));
  }
});

const mapStateToProps = (state: State, { ID }: Props): ValueProps => ({ ID });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTagLabel);
