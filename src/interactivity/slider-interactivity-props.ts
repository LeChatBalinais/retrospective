export type OnDragFunc = (xCoor: number, yCoor: number) => void;

export interface DraggableProps {
    exist: boolean;
    callbacks: {
        onDragBegin: OnDragFunc;
        onDrag: OnDragFunc;
        onDragEnd: OnDragFunc;
    };
}

export interface InteractivityProps {
    target: HTMLDivElement;
    draggable: DraggableProps;
}

export const DEFAULT_TAG_INTERACTIVITY_PROPS: InteractivityProps = {
    target: undefined,
    draggable: {
        exist: false,
        callbacks: {
            onDragBegin: undefined,
            onDrag: undefined,
            onDragEnd: undefined
        }
    }
};

export const updateDraggable = (
    prevState: InteractivityProps,
    draggable: boolean
): InteractivityProps => {
    if (
        prevState.draggable.exist === draggable
    )
        return prevState;
    return {
        ...prevState,
        draggable: {
            ...prevState.draggable,
            exist: draggable
        }
    };
};

export const updateOnDragBegin = (
    prevState: InteractivityProps,
    onDragBegin: OnDragFunc
): InteractivityProps => {
    if (prevState.draggable.callbacks.onDragBegin) return prevState;
    return {
        ...prevState,
        draggable: {
            ...prevState.draggable,
            callbacks: {
                ...prevState.draggable.callbacks,
                onDragBegin
            }
        }
    };
};

export const updateOnDrag = (
    prevState: InteractivityProps,
    onDrag: OnDragFunc
): InteractivityProps => {
    if (prevState.draggable.callbacks.onDrag) return prevState;
    return {
        ...prevState,
        draggable: {
            ...prevState.draggable,
            callbacks: {
                ...prevState.draggable.callbacks,
                onDrag
            }
        }
    };
};

export const updateOnDragEnd = (
    prevState: InteractivityProps,
    onDragEnd: OnDragFunc
): InteractivityProps => {
    if (prevState.draggable.callbacks.onDragEnd) return prevState;
    return {
        ...prevState,
        draggable: {
            ...prevState.draggable,
            callbacks: {
                ...prevState.draggable.callbacks,
                onDragEnd
            }
        }
    };
};