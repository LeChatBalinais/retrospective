import { State } from '~/state';
import { Reducer } from '~/utils/experimental/create-reducer';
import * as appearsAtEdited from './ui-current-tag-panel-appears-at-edited';
import * as disappearsAtEdited from './ui-current-tag-panel-disappears-at-edited';
import * as traceVisibilityCheckboxToggled from './ui-current-tag-panel-trace-visibility-checkbox-toggled';

export type Action =
  | appearsAtEdited.Action
  | disappearsAtEdited.Action
  | traceVisibilityCheckboxToggled.Action;

export type ActionID =
  | appearsAtEdited.ActionID
  | disappearsAtEdited.ActionID
  | traceVisibilityCheckboxToggled.ActionID;

export type Payload<T> = T extends appearsAtEdited.ActionID
  ? appearsAtEdited.Payload
  : T extends disappearsAtEdited.ActionID
  ? disappearsAtEdited.Payload
  : T extends traceVisibilityCheckboxToggled.ActionID
  ? traceVisibilityCheckboxToggled.Payload
  : undefined;

type ReducersRegister = {
  [P in ActionID]: Reducer<P, State, Payload<P>>;
};

export const reducersRegister: ReducersRegister = {
  ...appearsAtEdited.reducer,
  ...disappearsAtEdited.reducer,
  ...traceVisibilityCheckboxToggled.reducer
};
