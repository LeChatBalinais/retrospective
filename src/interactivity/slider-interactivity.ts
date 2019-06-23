import { Draggable } from 'gsap/Draggable';
import { InteractivityProps } from './slider-interactivity-props';

export interface Interactivity {
    draggable: Draggable;
}

type UpdateInteractivityFunc = (
    prevInteractivity: Interactivity
) => Interactivity;




const getNormalizedLeftTopPos = (
    pointerEvent: HTMLDivElement
): { x: number; y: number } => {
    const dragOnRect = pointerEvent.parentElement.getBoundingClientRect();
    const draggedRect = pointerEvent.getBoundingClientRect();
    const relativeX = draggedRect.left - dragOnRect.left;
    const relativeY = draggedRect.top - dragOnRect.top;
    const relativeNormalizedX = (relativeX / dragOnRect.width) * 100;
    const relativeNormalizedY = (relativeY / dragOnRect.height) * 100;
    return { x: relativeNormalizedX, y: relativeNormalizedY };
};


export const updatedDraggable = (
    draggable: Draggable,
    prevState: InteractivityProps,
    newState: InteractivityProps
): Draggable => {
    let newDraggable = draggable;

    if (prevState === newState) return newDraggable;

    const { draggable: prevExistance, target: prevTarget } = prevState;
    const { draggable: newExistance, target: newTarget } = newState;

    if (prevExistance !== newExistance) {
        const { exist: newIsDraggable, callbacks: newCallbacks } = newExistance;

        if (newDraggable) {
            newDraggable.kill();

            newDraggable = undefined;
        }

        if (newIsDraggable) {
            const {
                onDragBegin: onPress,
                onDragEnd: onRelease,
                onDrag
            } = newCallbacks;

            [newDraggable] = Draggable.create(newTarget, {
                dragClickables: true,
                bounds: '#seek-bounds',
                type: 'x',
                onPress: (pointerEvent: React.MouseEvent<HTMLDivElement>): void => {
                    const pos = getNormalizedLeftTopPos(newTarget);
                    if (onPress) onPress(pos.x, pos.y);
                },
                onRelease: (pointerEvent: React.MouseEvent<HTMLDivElement>): void => {
                    const pos = getNormalizedLeftTopPos(newTarget);
                    if (onRelease) onRelease(pos.x, pos.y);
                },
                onDrag: (pointerEvent: React.MouseEvent<HTMLDivElement>): void => {
                    const pos = getNormalizedLeftTopPos(newTarget);
                    if (onDrag) onDrag(pos.x, pos.y);
                },
                onClick: (e: PointerEvent): void => {
                    e.stopPropagation();
                }
            });
        }
        return newDraggable;
    }

    if (newDraggable && prevTarget !== newTarget) newDraggable.target = newTarget;

    return newDraggable;
};

export const updateInteractivity = (
    prevState: InteractivityProps,
    newState: InteractivityProps
): UpdateInteractivityFunc => (
    prevInteractivity: Interactivity
): Interactivity => {
        const { draggable } = prevInteractivity;

        let newInteractivity = prevInteractivity;

        const newDraggable = updatedDraggable(draggable, prevState, newState);

        if (newDraggable !== draggable)
            newInteractivity = { ...newInteractivity, draggable: newDraggable };


        return newInteractivity;
    };