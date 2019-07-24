import { Dispatch } from 'react';
import { connect } from 'react-redux';
import { Props, Button } from '../components/Button';
import saveTagAsync from '../actions/asyncActionCreators/save-tag';
import deleteTagAsync from '../actions/asyncActionCreators/delete-tag';
import { Action } from '../types/action';

const onPress = (dispatch: Dispatch<any>, tagID: string, isLocal: boolean): (() => void) => {
    if (isLocal)
        return (): void => {
            dispatch(saveTagAsync(tagID));
        };

    return (): void => {
        dispatch(deleteTagAsync(tagID));
    };
};



const makeMapDispatchToProps = (): ((
    dispatch: Dispatch<Action>,
    { ID, isLocal }: { ID: string, isLocal: boolean }
) => {
    onPress: () => void
}) => {
    return (dispatch: Dispatch<Action>, { ID, isLocal }: { ID: string, isLocal: boolean }): { onPress: () => void } =>
        ({ onPress: onPress(dispatch, ID, isLocal) })
}

const mapStateToProps = (_, { isLocal }: { isLocal: boolean }): Props => {
    return { caption: isLocal ? "Save" : "Delete" }
};

export default connect(mapStateToProps, makeMapDispatchToProps)(Button);
