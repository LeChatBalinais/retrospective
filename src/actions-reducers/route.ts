import { State } from '~/state';
import { Reducer } from '~/utils/create-reducer';
import * as home from './saga-tag-deletion-confirmed';

export type Action =
    | home.Action;

export type ActionID =
    | home.ActionID;

export type Payload<T> = T extends home.ActionID
    ? home.Payload
    : undefined;

type ReducersRegister = {
    [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
    ...home.reducer
};