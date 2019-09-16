import { SimpleActionTemplate } from '~/types/actions/simple-action-template';

export type NewTagLayerClickedType = 'NEW_TAG_LAYER_CLICKED';

export interface NewTagLayerClickedPayload {
  x: number;
  y: number;
}

export type NewTagLayerClicked = SimpleActionTemplate<
  NewTagLayerClickedType,
  NewTagLayerClickedPayload
>;

export const NEW_TAG_LAYER_CLICKED = 'NEW_TAG_LAYER_CLICKED';

export default function newTagLayerClicked(
  payload: NewTagLayerClickedPayload
): NewTagLayerClicked {
  return { type: NEW_TAG_LAYER_CLICKED, payload };
}
