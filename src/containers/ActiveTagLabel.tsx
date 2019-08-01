import { Dispatch } from 'react';
import { connect } from 'react-redux';
import ActiveTagLabel, {
  ValueProps,
  FuncProps
} from '../components/ActiveTagLabel';
import { setCurrentTag } from '../actions/actionCreators';
import { State } from '../types/state';
import { Action } from '../types/action';

interface Props {
  ID: string;
}

const mapDispatchToProps = (
  dispatch: Dispatch<Action>,
  { ID }: Props
): FuncProps => ({
  onMouseDown: (): void => {
    dispatch(setCurrentTag(ID));
  }
});

const mapStateToProps = (state: State, { ID }: Props): ValueProps => ({ ID });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActiveTagLabel);
