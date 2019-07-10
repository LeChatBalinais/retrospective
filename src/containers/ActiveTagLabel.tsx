import React from 'react';
import ActiveTagLabelComponent from '../components/ActiveTagLabel';
import { setCurrentTag } from '../actionCreators';
import store from '../store';

interface Props {
  ID: string;
}

const ActiveTagLabel = ({ ID }: Props): JSX.Element => (
  <ActiveTagLabelComponent
    {...{
      ID,
      onMouseDown: (): void => {
        store.dispatch(setCurrentTag(ID));
      }
    }}
  />
);

export default ActiveTagLabel;
