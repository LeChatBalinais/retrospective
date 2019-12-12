import { SagaIterator } from 'redux-saga';
import { takeEvery } from 'redux-saga/effects';
import { ActionID, Payload } from '~/actions-reducers';
import { ActionTemplate } from '~/utils/action-template';

export function* watchAction<A extends ActionID>(
  actionID: A,
  worker: (action: ActionTemplate<A, Payload<A>>) => SagaIterator
): SagaIterator {
  yield takeEvery(actionID, worker);
}
