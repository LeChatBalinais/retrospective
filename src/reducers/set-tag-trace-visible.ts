import { State } from '../types/state';
import { SetTagTraceVisible } from '../types/action';

const setTagTraceVisible = (state: State, action: SetTagTraceVisible): State => {
    const { payload: { ID, visible } } = action;

    let { visibleTraceTags } = state;


    if (visible) {
        if (!visibleTraceTags.includes(ID)) {
            visibleTraceTags = [...visibleTraceTags, ID];
        }
    } else if (visibleTraceTags.includes(ID)) {
        visibleTraceTags = visibleTraceTags.filter((value: string): boolean => (value !== ID));
    }

    return {
        ...state,
        visibleTraceTags
    };
}

export default setTagTraceVisible;
